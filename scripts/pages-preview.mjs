import { createHash } from "node:crypto";
import { mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const PROJECT_NAME = "resume-preview";
const PRODUCTION_BRANCH = "main";
const RESERVED_BRANCHES = new Set(["main", "master", "production"]);
const MAX_BRANCH_LENGTH = 28;
const BRANCH_PATTERN = /^[a-z0-9](?:[a-z0-9-]{0,26}[a-z0-9])?$/;
const LOCAL_ASSET_PATHS = new Set(["/profile.png", "/favicon.svg"]);

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

export function sanitizePagesBranch(headRef, prNumber) {
  const pr = parsePrNumber(prNumber);
  const normalized = String(headRef ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/^-+|-+$/g, "");

  let name = normalized;
  if (name.length > MAX_BRANCH_LENGTH) {
    const hash = createHash("sha256")
      .update(normalized)
      .digest("hex")
      .slice(0, 6);
    const prefix = normalized
      .slice(0, MAX_BRANCH_LENGTH - hash.length - 1)
      .replace(/-+$/g, "");
    name = prefix ? `${prefix}-${hash}` : "";
  }

  if (!name || RESERVED_BRANCHES.has(name)) {
    name = `preview-pr-${pr}`;
  }

  name = name.slice(0, MAX_BRANCH_LENGTH).replace(/-+$/g, "");
  assert(
    BRANCH_PATTERN.test(name),
    `Sanitized Pages branch is not a safe alias: ${name}`,
  );
  assert(
    !RESERVED_BRANCHES.has(name),
    `Sanitized Pages branch must not be the production branch: ${name}`,
  );
  return name;
}

function parsePrNumber(value) {
  const text = String(value ?? "").trim();
  assert(
    /^[1-9]\d{0,9}$/.test(text),
    "Pull request number must be a positive integer.",
  );
  return text;
}

function isLocalAssetPath(pathname) {
  return pathname.startsWith("/_astro/") || LOCAL_ASSET_PATHS.has(pathname);
}

function pathnameOf(reference) {
  if (reference.startsWith("/") && !reference.startsWith("//")) {
    return reference.split(/[?#]/, 1)[0];
  }
  if (/^https?:\/\//i.test(reference)) {
    try {
      return new URL(reference).pathname;
    } catch {
      return "";
    }
  }
  return "";
}

function isRootRelative(reference) {
  return (
    reference.startsWith("/") &&
    !reference.startsWith("//") &&
    !reference.includes("://")
  );
}

export function findAssetProblems(filename, text) {
  const problems = [];

  if (/https?:\/\/mola1129\.dev\/_astro\//i.test(text)) {
    problems.push(`${filename}: production origin is prefixed onto /_astro/`);
  }

  const tags = text.match(/<(?:link|script|img)\b[^>]*>/gi) ?? [];
  for (const tag of tags) {
    const attr = /\s(?:src|href)\s*=\s*(?:"([^"]*)"|'([^']*)')/i.exec(tag);
    const reference = attr?.[1] ?? attr?.[2];
    if (!reference) continue;
    const pathname = pathnameOf(reference);
    if (!isLocalAssetPath(pathname)) continue;
    if (!isRootRelative(reference)) {
      problems.push(
        `${filename}: local asset is not root-relative: ${reference}`,
      );
    }
  }

  const baseTag = /<base\b[^>]*>/i.exec(text);
  if (baseTag && !/\shref\s*=\s*["']\/["']/i.test(baseTag[0])) {
    problems.push(
      `${filename}: <base> must stay at / so *.pages.dev can load assets`,
    );
  }

  const urls = text.match(/url\(\s*(?:"[^"]*"|'[^']*'|[^)"']+)\s*\)/gi) ?? [];
  for (const entry of urls) {
    const raw = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^)"']+))\s*\)/i.exec(entry);
    const reference = (raw?.[1] ?? raw?.[2] ?? raw?.[3] ?? "").trim();
    const pathname = pathnameOf(reference);
    if (!isLocalAssetPath(pathname)) continue;
    if (!isRootRelative(reference)) {
      problems.push(
        `${filename}: CSS asset is not root-relative: ${reference}`,
      );
    }
  }

  return problems;
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(path)));
    } else if (/\.(html|css|js|mjs)$/.test(entry.name)) {
      files.push(path);
    }
  }
  return files;
}

export async function checkAssetDirectory(dir) {
  const files = await walk(dir);
  const htmlFiles = files.filter((file) => file.endsWith(".html"));
  assert(htmlFiles.length > 0, `No HTML files in ${dir}`);

  const problems = [];
  for (const file of files) {
    const text = await readFile(file, "utf8");
    problems.push(...findAssetProblems(file, text));
  }
  if (problems.length > 0) {
    throw new Error(problems.join("\n"));
  }
}

function errorList(body) {
  return Array.isArray(body?.errors) ? body.errors : [];
}

export function interpretProjectGet(status, body) {
  if (
    status === 200 &&
    body?.success === true &&
    body?.result?.name === PROJECT_NAME
  ) {
    return "exists";
  }
  if (isProjectMissing(status, body)) return "missing";
  return "error";
}

export function interpretProjectCreate(status, body) {
  if (
    status === 200 &&
    body?.success === true &&
    body?.result?.name === PROJECT_NAME
  ) {
    return "created";
  }
  if (
    errorList(body).some((error) =>
      /already exists/i.test(String(error?.message ?? "")),
    )
  ) {
    return "exists";
  }
  return "error";
}

function isProjectMissing(status, body) {
  if (status === 404) return true;
  return errorList(body).some(
    (error) =>
      error?.code === 8000007 ||
      /project not found/i.test(String(error?.message ?? "")),
  );
}

function cloudflareError(status, body, token) {
  const messages = errorList(body)
    .map(
      (error) => `${error?.code ?? "?"}: ${error?.message ?? "unknown error"}`,
    )
    .join("; ");
  const detail = messages || "Cloudflare API request failed";
  return new Error(redact(`${detail} (HTTP ${status})`, token));
}

function redact(text, token) {
  return token ? text.split(token).join("[redacted]") : text;
}

async function cloudflare(token, accountId, path, init = {}) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}${path}`,
    {
      ...init,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        ...init.headers,
      },
      signal: AbortSignal.timeout(30_000),
    },
  );
  const text = await response.text();
  let body = null;
  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      body = null;
    }
  }
  return { status: response.status, body };
}

async function ensureProject() {
  const token = process.env.CLOUDFLARE_API_TOKEN ?? "";
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID ?? "";
  assert(token.length > 0, "CLOUDFLARE_API_TOKEN is empty.");
  assert(
    /^[a-f0-9]{32}$/i.test(accountId),
    "CLOUDFLARE_ACCOUNT_ID must be a 32-character hex account id.",
  );

  const projectPath = `/pages/projects/${PROJECT_NAME}`;
  let current = await cloudflare(token, accountId, projectPath);
  let state = interpretProjectGet(current.status, current.body);

  if (state === "error") {
    throw cloudflareError(current.status, current.body, token);
  }

  if (state === "missing") {
    const created = await cloudflare(token, accountId, "/pages/projects", {
      method: "POST",
      body: JSON.stringify({
        name: PROJECT_NAME,
        production_branch: PRODUCTION_BRANCH,
      }),
    });
    const createdState = interpretProjectCreate(created.status, created.body);
    if (createdState === "error") {
      throw cloudflareError(created.status, created.body, token);
    }

    for (let attempt = 0; attempt < 5; attempt += 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000 * 2 ** attempt));
      current = await cloudflare(token, accountId, projectPath);
      state = interpretProjectGet(current.status, current.body);
      if (state === "exists") break;
      if (state === "error") {
        throw cloudflareError(current.status, current.body, token);
      }
    }
  }

  assert(
    state === "exists",
    `Pages project ${PROJECT_NAME} was not visible after create.`,
  );
  process.stderr.write(`Cloudflare Pages project ${PROJECT_NAME} is ready.\n`);
}

async function selfTest() {
  assert(sanitizePagesBranch("fix/api", 1) === "fix-api", "slash");
  assert(
    sanitizePagesBranch("Feature/Add_Button", 2) === "feature-add-button",
    "case and underscore",
  );
  assert(
    sanitizePagesBranch("cursor/pages-preview-2dc4", 3) ===
      "cursor-pages-preview-2dc4",
    "this branch",
  );
  assert(sanitizePagesBranch("main", 4) === "preview-pr-4", "reserved main");
  assert(sanitizePagesBranch("Main", 5) === "preview-pr-5", "reserved case");
  assert(sanitizePagesBranch("///", 6) === "preview-pr-6", "empty");
  assert(sanitizePagesBranch("a", 7) === "a", "single character");

  const longA = `cursor/${"a".repeat(40)}`;
  const longB = `cursor/${"b".repeat(40)}`;
  const aliasA = sanitizePagesBranch(longA, 8);
  const aliasB = sanitizePagesBranch(longB, 8);
  assert(
    aliasA.length <= MAX_BRANCH_LENGTH && aliasB.length <= MAX_BRANCH_LENGTH,
    "length",
  );
  assert(aliasA !== aliasB, "long branches stay distinct");
  assert(
    BRANCH_PATTERN.test(aliasA) && BRANCH_PATTERN.test(aliasB),
    "long pattern",
  );

  const good = `<!doctype html><link rel="icon" href="/favicon.svg"><img src="/profile.png"><script src="/_astro/app.js"></script><meta property="og:image" content="https://mola1129.dev/profile.png">`;
  const bad = `<link rel="stylesheet" href="https://mola1129.dev/_astro/app.css">`;
  assert(findAssetProblems("good.html", good).length === 0, "good html");
  assert(findAssetProblems("bad.html", bad).length > 0, "bad html");

  const directory = await mkdtemp(join(tmpdir(), "pages-preview-"));
  try {
    await writeFile(join(directory, "index.html"), good);
    await checkAssetDirectory(directory);
    await writeFile(join(directory, "bad.html"), bad);
    let failed = false;
    try {
      await checkAssetDirectory(directory);
    } catch {
      failed = true;
    }
    assert(failed, "directory check rejects absolute asset URLs");
  } finally {
    await rm(directory, { recursive: true, force: true });
  }

  assert(
    interpretProjectGet(200, {
      success: true,
      result: { name: PROJECT_NAME },
    }) === "exists",
    "get exists",
  );
  assert(
    interpretProjectGet(404, {
      success: false,
      errors: [{ code: 8000007, message: "Project not found" }],
    }) === "missing",
    "get missing",
  );
  assert(
    interpretProjectGet(403, { success: false, errors: [] }) === "error",
    "get forbidden",
  );
  assert(
    interpretProjectCreate(200, {
      success: true,
      result: { name: PROJECT_NAME },
    }) === "created",
    "create",
  );
  assert(
    interpretProjectCreate(400, {
      success: false,
      errors: [{ message: "A project with this name already exists." }],
    }) === "exists",
    "create race",
  );

  assert(BRANCH_PATTERN.test(PROJECT_NAME), "project name");
  process.stderr.write("pages-preview self-test ok\n");
}

const [command, ...args] = process.argv.slice(2);

try {
  if (command === "self-test") {
    await selfTest();
  } else if (command === "branch") {
    process.stdout.write(`${sanitizePagesBranch(args[0], args[1])}\n`);
  } else if (command === "check-assets") {
    await checkAssetDirectory(args[0] || "dist");
  } else if (command === "ensure-project") {
    await ensureProject();
  } else if (command === "project-name") {
    process.stdout.write(`${PROJECT_NAME}\n`);
  } else {
    throw new Error(
      "Usage: pages-preview.mjs <self-test|branch|check-assets|ensure-project|project-name>",
    );
  }
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`${message}\n`);
  process.exitCode = 1;
}
