---
'@koaris/tokens': major
---

tokens 2.0: a Tailwind v4 `@theme` CSS file with semantic variables
(`--color-accent`, `--color-ink`, `--color-border`, ...) that flip
automatically in dark mode, plus the typography and radius tokens
(`--text-*`, `--font-weight-*`, `--leading-*`, `--radius-*`).

Breaking changes:

- An `exports` map replaces deep imports: only `@koaris/tokens`,
  `./theme.css`, `./themes/koaris.css` and `./themes/koris.css` resolve.
  Imports of `dist/*` or `package.json` are removed.
- Tailwind v4 is required to compile `theme.css`; the JS config mapping
  (`tailwind.config.ts` with `fontSize`, `raddi`, ...) is gone.
- Radii now actually apply (v1's typo key `raddi` was ignored by
  Tailwind): `rounded-xs` 2→4px, `rounded-md` 6→8px, `rounded-lg` 8→16px.
- Known issue: the default accent pair fails WCAG AA for button text
  (3.13:1 / 3.16:1 vs 4.5:1 required). Kept for this major as a brand
  call; a text-safe pair is planned (see the TODO in `theme.css`).
