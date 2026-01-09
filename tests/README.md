# Visual Regression Tests

## Configuration

**Test coverage:**
- Desktop (1920×1080), Tablet (768×1024), Mobile (Pixel 7)
- Light/Dark modes
- 6 tests total

**Key settings (playwright.config.ts):**
```typescript
timeout: 60000                    // Test timeout
expect: { timeout: 10000 }        // Screenshot comparison timeout
fullyParallel: true               // Parallel execution
retries: 2                        // CI only
maxDiffPixelRatio: 0.01           // 1% pixel difference tolerance
```

## Workflow

```bash
# Run tests
pnpm test

# Update snapshots (after intentional changes)
pnpm test:update
git add tests/*-snapshots/

# View results
pnpm test:report
```

## Troubleshooting

**Test fails:**
- Check diff: `pnpm test:report`
- If intentional: `pnpm test:update`
- If bug: fix code and re-test

**Browser install fails:**
- Use CI instead (automatic on PR)
