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
| `--color-accent-foreground` | `text-accent-foreground` | `#fefefe`     |
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

**Known issue:** the default accent pair (`#fefefe` on `#f36246`) fails
WCAG AA (3.13:1 / 3.16:1, AA needs 4.5:1) for the text sizes Button uses.
This is a deliberate brand call for 2.0; a text-safe accent pair is
planned for the next minor (see the TODO in `theme.css`).

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
