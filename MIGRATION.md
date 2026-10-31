# Migrating to bloom-ui 2.0

Version 2.0 ships a Tailwind v4 token system, React 19 support, and rebuilt
Button, TextInput, Card, Modal and Toast components. This is a major release
for both `@koaris/bloom-ui` and `@koaris/tokens`.

## Design tokens (`@koaris/tokens`)

The package now ships a Tailwind v4 `@theme` CSS file with semantic tokens.
Import it after Tailwind:

```css
@import 'tailwindcss';
@import '@koaris/tokens/theme.css';

/* Optional brand accents (import after the base theme) */
@import '@koaris/tokens/themes/koaris.css'; /* rust accent #c13f27 */
@import '@koaris/tokens/themes/koris.css';  /* orange accent #f36246 */
```

### Semantic tokens

| Token                   | Utility class         | Light value          |
| ----------------------- | --------------------- | -------------------- |
| `--color-accent`        | `bg-accent` etc.      | `#f36246` (orange500)|
| `--color-accent-foreground` | `text-accent-foreground` | `#1c2126`      |
| `--color-accent-text`   | `text-accent-text`    | `#c2410c`            |
| `--color-ink`           | `text-ink`            | `#1c2126`            |
| `--color-surface`       | `bg-surface`          | `#ffffff`            |
| `--color-muted`         | `bg-muted`            | `#f6f6f6`            |
| `--color-muted-foreground` | `text-muted-foreground` | `#818484`      |
| `--color-border` / `--color-rule` | `border-border` | `#e3e3e2`        |
| `--color-danger`        | `text-danger`         | `#e91e63`            |
| `--color-success`       | `text-success`        | `#46f2af`            |

Semantic tokens resolve to primitives (`--color-orange-500`, `--color-neutral-*`,
...) which are still available, so existing palette utilities
(`bg-orange-500`, `text-neutral-800`) keep working.

### Accent contrast (WCAG AA)

The brand accent stays `#f36246` for fills (`bg-accent`). Accent-colored
**text** uses a dedicated text-safe token, `--color-accent-text`, and the
text on the accent fill (`--color-accent-foreground`) changed from
near-white to dark ink. Ratios computed with the WCAG 2.x relative
luminance formula (AA requires 4.5:1 for these text sizes):

| Pair                                              | Before        | Now           |
| ------------------------------------------------- | ------------- | ------------- |
| `--accent-foreground` on the `#f36246` fill       | 3.13:1 ✗      | **5.13:1** ✓ (#1c2126) |
| accent text on white (secondary/outline/ghost/link) | 3.16:1 ✗    | **5.18:1** ✓ (#c2410c) |
| dark mode: accent text on the dark surface        | 3.16:1 ✗      | **5.13:1** ✓ (#f36246) |

- **Default / Koris (orange) theme:** `--accent-text` is `#c2410c` in
  light mode (same hue as the fill, darkened) and `#f36246` in dark mode
  (on the `#1c2126` surface the darkened variant would fall back to
  3.13:1). `--accent-foreground` is `#1c2126` in both modes (5.13:1 on
  the fill).
- **Koaris (rust `#c13f27`) theme:** white `#fefefe` on the rust fill
  passes (5.24:1), so the fill keeps white text; `--accent-text` is the
  rust itself in light mode (5.24:1 on white) and a lightened rust
  `#f07361` in dark mode (5.66:1 on `#1c2126`; the raw rust would be
  3.10:1 there).
- **Breaking:** if you hard-coded `text-accent-foreground` as a light
  color or used `text-accent` for text, migrate to `text-accent-text`
  (Button's secondary/outline/ghost/link variants already do). The
  `text-accent` utility still exists for non-text accent uses.

### Typography tokens

The font sizes, weights and line heights that previously lived in the
Tailwind config now live in `@theme`: `--text-xxs` through `--text-9xl`
(each with a paired `--text-*--line-height`), `--font-weight-regular/
medium/bold` and `--leading-shorter/short/base/tall`. The `text-md`
utility is back (1rem/160%).

### Radii now apply (breaking)

v1's config mapped radii under the typo key `raddi`, which Tailwind
ignored, so `rounded-*` fell back to Tailwind's defaults. The new
`--radius-*` tokens apply. Actual size changes:

| Utility      | v1 (effective) | v2 |
| ------------ | -------------- | -- |
| `rounded-xs` | 2px            | 4px |
| `rounded-md` | 6px            | 8px |
| `rounded-lg` | 8px            | 16px |

### Deep imports of `@koaris/tokens` are removed (breaking)

`@koaris/tokens` now ships an `exports` map. Only these entry points
exist: `@koaris/tokens`, `@koaris/tokens/theme.css`,
`@koaris/tokens/themes/koaris.css` and `@koaris/tokens/themes/koris.css`.
Deep imports such as `@koaris/tokens/dist/index.js` or
`@koaris/tokens/package.json` no longer resolve.

### Dark mode

Dark values are applied:

- automatically via `prefers-color-scheme: dark`,
- explicitly by adding the `dark` class to a root element,
- pinned to light by adding the `light` class (opts out of the system
  preference).

No `dark:` utility classes are needed for themed components — the semantic
variables flip automatically. Note that `dark:` utilities themselves stay
media-based (`prefers-color-scheme`); there is no `@custom-variant dark`,
so class-based `dark:` variants require your own setup.

### TypeScript tokens

The existing TS exports (`colors`, `fontSizes`, `fonts`, `raddi`, `space`,
...) are unchanged.

## React 19

`react` and `react-dom` peer dependencies are now `^19`. Update your app:

```bash
npm install react@^19 react-dom@^19
npm install -D @types/react@^19 @types/react-dom@^19
```

## Icons: react-icons → lucide-react

`react-icons` has been removed. All icons now come from `lucide-react`:

```diff
- import { FiCheck, FiX } from 'react-icons/fi'
+ import { Check, X } from 'lucide-react'
```

Common mappings used by bloom-ui: `FaUser` → `User`, `FiCheck` → `Check`,
`FiX` → `X`.

## Component changes

Components are rebuilt on Radix primitives + `class-variance-authority`
with the shadcn/ui `cn` helper (`clsx` + `tailwind-merge`). Public prop APIs
were kept where possible.

### Modal (now `@radix-ui/react-dialog`)

- Props are unchanged: `isOpen`, `onClose`, `title`, `size`, `children`,
  `showCloseButton`, `closeOnOutsideClick`, `closeOnEsc`, `footer`.
  A new optional `description` prop is rendered as `Dialog.Description`.
- The dialog is portalled and provides focus trapping, ARIA roles and
  scroll locking automatically. Focus moves into the dialog on open.
- Accessibility: the visible heading is the `Dialog.Title`; when no
  `title` is passed, a sr-only `Dialog.Title` ("Dialog") is rendered so
  the dialog always has an accessible name.
- **Breaking:** the `#bloom-ui-portal-root` element is gone — Radix
  portals into `document.body` directly. Remove any container divs you
  added for v1.
- **Breaking:** extra/unknown props are forwarded to Radix's
  `Dialog.Content` (an HTMLDivElement), not to the outer wrapper.

### Toast (now `@radix-ui/react-toast`)

- `Toast`, `ToastProvider`, `ToastContainer`, `useToast` and `toastService`
  keep their names and props (`message`, `title`, `variant`, `duration`,
  `showCloseButton`, `onDismiss`).
- Toasts now support swipe-to-dismiss and are announced via a live region.
- A standalone `<Toast>` now removes itself on timeout, swipe or close
  click even without `onDismiss`; generated ids are unique per toast.
- Colors use semantic tokens (`border-success`, `border-danger`, ...).

### Button

- Same variants (`primary`, `secondary`, `outline`, `ghost`, `link`) and
  sizes (`xs`, `sm`, `md`, `lg`); same `loading`, `startIcon`, `endIcon`,
  `fullWidth` props.
- **Breaking:** `type` now defaults to `"button"` (v1 rendered
  `<button>` without a type, i.e. `submit` inside forms).
- Styling now uses semantic tokens: the primary variant follows
  `--color-accent`, so themes change button color globally.

### Card

- Same props. Colors moved from raw palette classes to semantic tokens
  (`bg-surface`, `text-ink`, `border-border`, `bg-accent`, ...).
- **Breaking:** beyond the orange background, the fixed v1 layout is
  gone: `min-h-[302px] max-w-[306px] items-center justify-around` no
  longer apply. Card is now a themed, size-variant surface card
  (`small`/`medium`/`large`/`full`).

### Input / TextInput

- **Breaking:** Input now uses semantic tokens, so it follows the theme
  and dark mode instead of fixed `gray-*`/`red-*`/`green-*` colors.
- **Breaking:** Input's lucide icons are now explicitly sized (`h-4`,
  16px). In v1 they were sized `1em`; unsized lucide icons would render
  at 24px.
- Without an `id`, Input/TextInput fall back to `useId()` for
  `htmlFor`/`aria-describedby` wiring.
- **Breaking:** TextInput applies `className` to the wrapper only; it is
  no longer duplicated onto the `<input>`.

## Tailwind v4

- **Breaking:** Tailwind v4 is required. The `tailwind.config.ts` JS
  config is gone; tokens live in CSS via `@theme`.
- If you extended the old config, re-create those customizations in CSS
  with `@theme` blocks instead.
