# Resume

Personal resume website built with Astro 5, Vue 3, and Tailwind CSS 4.

**Live**: https://mola1129.dev

## Setup

```bash
pnpm install
pnpm dev  # localhost:4321
```

## Commands

```bash
pnpm dev              # Development server
pnpm build            # Build to ./dist/
pnpm preview          # Preview build
pnpm lint             # ESLint
pnpm format           # Prettier
pnpm test             # Visual regression tests
pnpm test:update      # Update test snapshots
```

## Visual Regression Testing

Desktop/Tablet/Mobile × Light/Dark = 6 tests. Runs automatically on PRs.

**First-time setup:**

```bash
pnpm exec playwright install chromium --with-deps
pnpm build
pnpm test
```

**Troubleshooting:**

- Test fails → `pnpm test:report` to check diff
- Intentional change → `pnpm test:update`
- Browser install fails → Use CI

## Stack

- Astro 5 + Vue 3
- Tailwind CSS 4
- shadcn-vue
- Playwright (VRT)
- GitHub Pages
