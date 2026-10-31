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

### Dark mode

Dark values are applied:

- automatically via `prefers-color-scheme: dark`,
- explicitly by adding the `dark` class to a root element,
- pinned to light by adding the `light` class (opts out of the system
  preference).

No `dark:` utility classes are needed for themed components — the semantic
variables flip automatically.

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
- The dialog is portalled and provides focus trapping, ARIA roles and
  scroll locking automatically.
- Accessibility: an invisible `Dialog.Title` is always rendered (defaults to
  "Dialog" when no `title` is passed).

### Toast (now `@radix-ui/react-toast`)

- `Toast`, `ToastProvider`, `ToastContainer`, `useToast` and `toastService`
  keep their names and props (`message`, `title`, `variant`, `duration`,
  `showCloseButton`, `onDismiss`).
- Toasts now support swipe-to-dismiss and are announced via a live region.
- Colors use semantic tokens (`border-success`, `border-danger`, ...).

### Button

- Same variants (`primary`, `secondary`, `outline`, `ghost`, `link`) and
  sizes (`xs`, `sm`, `md`, `lg`); same `loading`, `startIcon`, `endIcon`,
  `fullWidth` props.
- Styling now uses semantic tokens: the primary variant follows
  `--color-accent`, so themes change button color globally.

### TextInput / Card

- Same props. Colors moved from raw palette classes to semantic tokens
  (`bg-surface`, `text-ink`, `border-border`, `bg-accent`, ...). Card no
  longer has an orange background by default; it is a themed surface card.

## Tailwind v4

- The `tailwind.config.ts` JS config is gone; tokens live in CSS via
  `@theme`.
- If you extended the old config, re-create those customizations in CSS
  with `@theme` blocks instead.
