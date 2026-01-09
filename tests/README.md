# Visual Regression Tests

Desktop/Tablet/Mobile × Light/Dark = 6 tests

## Usage

```bash
pnpm test              # Run tests
pnpm test:update       # Update snapshots
pnpm test:report       # View results
```

## Troubleshooting

- Test fails → `pnpm test:report` to check diff
- Intentional change → `pnpm test:update`
- Browser install fails → Use CI
