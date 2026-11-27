import { spawnSync } from "node:child_process";
import { afterEach, describe, expect, it, vi } from "vitest";
import { calculateDuration, formatDateJapanese } from "./date";

afterEach(() => {
  vi.useRealTimers();
});

describe("calculateDuration", () => {
  it("counts both the start and end months", () => {
    expect(calculateDuration("2024/01 - 2024/03")).toBe("(3ヶ月)");
  });

  it("counts a single month when the start and end are the same", () => {
    expect(calculateDuration("2024/01 - 2024/01")).toBe("(1ヶ月)");
  });

  it("rolls 12 inclusive months into a year", () => {
    expect(calculateDuration("2024/01 - 2024/12")).toBe("(1年)");
  });

  it("counts across a year boundary", () => {
    expect(calculateDuration("2023/11 - 2024/02")).toBe("(4ヶ月)");
    expect(calculateDuration("2023/12 - 2024/01")).toBe("(2ヶ月)");
    expect(calculateDuration("2022/04 - 2023/10")).toBe("(1年7ヶ月)");
  });

  it("reads 現在 in Asia/Tokyo when that month differs from UTC", () => {
    // 2026-01-31 15:30 UTC is 2026-02-01 00:30 in Tokyo.
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-31T15:30:00.000Z"));

    expect(calculateDuration("2026/01 - 現在")).toBe("(2ヶ月)");
    expect(calculateDuration("2026/02 - 現在")).toBe("(1ヶ月)");
  });

  it("reads 現在 in Asia/Tokyo across the new year", () => {
    // 2025-12-31 15:30 UTC is 2026-01-01 00:30 in Tokyo.
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2025-12-31T15:30:00.000Z"));

    expect(calculateDuration("2025/11 - 現在")).toBe("(3ヶ月)");
    expect(calculateDuration("2025/12 - 現在")).toBe("(2ヶ月)");
  });

  it("keeps the published project periods inclusive", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-11-27T03:00:00.000Z"));

    expect(calculateDuration("2023/11 - 現在")).toBe("(3年1ヶ月)");
    expect(calculateDuration("2022/04 - 2023/10")).toBe("(1年7ヶ月)");
  });

  it("returns an empty string for periods it cannot interpret", () => {
    expect(calculateDuration("2024/01")).toBe("");
    expect(calculateDuration("2024/01-2024/03")).toBe("");
    expect(calculateDuration("2024/13 - 2024/14")).toBe("");
    expect(calculateDuration("2024/03 - 2024/01")).toBe("");
  });

  it("does not follow the process timezone", () => {
    const instant = "2026-01-31T15:30:00.000Z";
    expect(durationInTimezone("UTC", "2026/01 - 現在", instant)).toBe(
      "(2ヶ月)",
    );
    expect(
      durationInTimezone("Pacific/Honolulu", "2026/01 - 現在", instant),
    ).toBe("(2ヶ月)");
  });
});

describe("formatDateJapanese", () => {
  it("formats an instant on the Asia/Tokyo calendar", () => {
    expect(formatDateJapanese(new Date("2026-01-31T15:30:00.000Z"))).toBe(
      "2026年2月1日 00:30",
    );
  });

  it("formats the current instant in Asia/Tokyo", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2025-12-31T15:30:00.000Z"));

    expect(formatDateJapanese()).toBe("2026年1月1日 00:30");
  });
});

function durationInTimezone(
  timeZone: string,
  period: string,
  isoInstant: string,
): string {
  const script = `
    const fixed = new Date(${JSON.stringify(isoInstant)});
    const RealDate = Date;
    class FixedDate extends RealDate {
      constructor(...args) {
        if (args.length === 0) {
          super(fixed.getTime());
          return;
        }
        super(...args);
      }
      static now() {
        return fixed.getTime();
      }
    }
    globalThis.Date = FixedDate;
    const { calculateDuration } = await import(${JSON.stringify(new URL("./date.ts", import.meta.url).href)});
    process.stdout.write(calculateDuration(${JSON.stringify(period)}));
  `;

  const result = spawnSync(
    process.execPath,
    ["--experimental-strip-types", "--input-type=module", "-e", script],
    {
      env: { ...process.env, TZ: timeZone },
      encoding: "utf8",
    },
  );

  if (result.status !== 0) {
    throw new Error(result.stderr || "failed to calculate duration");
  }

  return result.stdout;
}
