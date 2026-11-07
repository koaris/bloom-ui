# @koaris/bloom-ui

## 3.0.0

### Major Changes

- fc159e6: Modal is built on Radix Dialog, and Card and TextInput use the theme roles. See MIGRATION.md.

  Breaking changes:

  - Modal is a Radix dialog. It renders into `document.body`, so the `#bloom-ui-portal-root` element is gone. Extra props now go to the dialog panel instead of the backdrop. Focus moves into the dialog when it opens and returns to the trigger when it closes, and the title is the dialog's accessible name. New optional `description` prop.
  - Card drops its fixed v1 layout and orange background (`min-h-[302px] max-w-[306px] items-center justify-around`, `bg-orange-500`). It is now a theme surface card (`bg-surface`, `text-ink`, `border-rule`) sized by `size` (`small`, `medium`, `large`, `full`). A clickable Card gets `role="button"` and responds to Enter and Space.

  Other changes:

  - TextInput uses the theme roles and sets `aria-invalid` when `error` is set.
  - Input falls back to a generated id, so its label, error and helper text stay linked when no `id` is passed.
  - Toast ids are unique even when two toasts are created in the same millisecond, and a standalone `<Toast>` hides itself after closing even without `onDismiss`.
  - `tailwind-merge` (now v3), `clsx`, `class-variance-authority` and `@radix-ui/react-dialog` are dependencies, and `@tailwindcss/cli` moved to devDependencies. The build starts with a `'use client'` banner for React Server Components.

## 2.2.0

npm does not accept 2.0.0 or 2.1.0 again (both were published in 2023 and later unpublished), so this major release is 2.2.0.

### Major Changes

- 8a4089f: Adopt the Koaris tools design system (from tools-koaris) in bloom-ui.

  **Tokens (`@koaris/tokens`)**

  - New semantic theme: `lightTheme` / `darkTheme` colour roles (`bg`, `surface`, `surface-sunken`, `ink`, `ink-muted`, `ink-faint`, `rule`, `accent`, `accent-hover`, `accent-contrast`, `accent-wash`) stored as RGB channels, plus `themeRadii`, `lightShadows` / `darkShadows` and `fontStacks` (Ubuntu Sans, IBM Plex Mono).
  - `themeCssVariables` (`light` / `dark`) for stylesheets, and `semanticColors`, `semanticRadii`, `semanticShadows`, `semanticFonts` to extend a Tailwind config with the same utilities (`bg-surface`, `text-ink-muted`, `border-rule`, `bg-accent/40`, `rounded`, `rounded-lg`, `font-mono`, …).
  - `fonts` now points at Ubuntu Sans and IBM Plex Mono instead of Open Sans and `monospace`.
  - `radii` export; `raddi` stays as a deprecated alias.

  **Stylesheet (`@koaris/bloom-ui/tailwind.css`)**

  - Defines the theme variables on `:root`, with dark values under `prefers-color-scheme: dark`, and sets body text, background, fonts and the default border colour from them.
  - `rounded` is now 6px (`--radius-sm`), `rounded-lg` 10px (`--radius`); `shadow-sm` / `shadow` use the theme shadows.

  **Components**

  - New: `Field`, `Select`, `Range`, `ColorField`, `DropZone`, `OutputPanel` (with `OutputPanelStringsProvider` and en/pt strings), `Faq`, `Collapsible` and the `useCopy` hook.
  - `Button` is restyled with theme roles. **The default variant is now `secondary`**; pass `variant="primary"` for the accent action. `loading` shows a spinner next to the label instead of hiding it, and the `max-w-[180px]` cap is gone.
  - `Toggle` uses the accent role and a stable `useId` id instead of `Math.random()`, which caused hydration mismatches.
  - `Heading` and `Text` use the `ink` role, so they follow dark mode. `Text` no longer drops the `className` you pass.
  - `Link` uses the accent role, `newPage` is optional (defaults to `true`), and `children` accepts any `ReactNode`.

  **Package**

  - `react-icons` is no longer a dependency; icons are inline SVGs. Its directory imports made Node fail to load the ESM build (`ERR_UNSUPPORTED_DIR_IMPORT`).
  - The React peer range now includes React 19.

### Minor Changes

- 831e2f6: Redesign the Toast: white card with a tinted icon badge, enter/exit animations, and a progress bar for the auto-dismiss countdown. The countdown pauses while the toast is hovered or focused, the newest toast stacks closest to the screen edge, and the toast container no longer blocks clicks on the page behind it.

## 1.3.4

### Patch Changes

- 21a7719: Remove default exports of Button, Loading, Skeleton, and Toast; named exports are unchanged.

## 1.3.3

### Patch Changes

- update tailwind version to v4

## 1.3.2

### Patch Changes

- fix: colors in heading/text don't respect the tokens

## 1.3.1

### Patch Changes

- card and heading improvements

## 1.3.0

### Minor Changes

- 5acb6b7: Refactor button and card styles

## 1.2.6

### Patch Changes

- Improve Text and Heading components

## 1.2.5

### Patch Changes

- fix input styles

## 1.2.4

### Patch Changes

- Fix erros in nextjs usage

## 1.2.3

### Patch Changes

- Creating Feedback components

## 1.2.2

### Patch Changes

- move bloom-ui to Koaris Organization at Github

## 1.2.1

### Patch Changes

- fix: types in import

## 1.2.0

### Minor Changes

- configure a minor version

## 1.1.3

### Patch Changes

- feat: update files in production

## 1.1.2

### Patch Changes

- Optimized Tailwind configuration and build process to reduce bundle size.

## 1.1.1

### Patch Changes

- fix card css

## 1.1.0

### Minor Changes

- button and checkbox improvements

## 1.0.5

### Patch Changes

- Create link component

## 1.0.4

### Patch Changes

- creating form component

## 1.0.3

### Patch Changes

- Update components and add new colors

## 1.0.2

### Patch Changes

- fix tailwind post css

## 1.0.1

### Patch Changes

- recreating package

## 1.0.0

### Major Changes

- Creating bloom-ui
