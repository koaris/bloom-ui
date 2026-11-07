# @koaris/tokens

## 1.1.0

### Minor Changes

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

## 1.0.4

### Patch Changes

- card and heading improvements

## 1.0.3

### Patch Changes

- move bloom-ui to Koaris Organization at Github

## 1.0.2

### Patch Changes

- fix files to deploy

## 1.0.1

### Patch Changes

- Update components and add new colors
