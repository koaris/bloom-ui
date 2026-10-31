---
'@koaris/bloom-ui': major
---

bloom-ui 2.0: Radix-based rebuilds of Button, TextInput, Card, Modal and
Toast with `cva` + `cn`, lucide-react icons, and semantic-token styling.

Breaking changes:

- React `^19` / `react-dom` `^19` peer dependencies (React 18 no longer
  supported).
- `react-icons` removed; all icons come from `lucide-react` (`FiCheck` →
  `Check`, `FiX` → `X`, ...).
- Modal is a Radix dialog: the `#bloom-ui-portal-root` element is gone
  (portals into `document.body`), extra props forward to `Dialog.Content`,
  focus moves into the dialog on open, and the visible heading is the
  accessible `Dialog.Title`. New optional `description` prop.
- Toast: a standalone `<Toast>` closes itself (timeout/swipe/close) even
  without `onDismiss`; service ids are unique per toast.
- Button: `type` defaults to `"button"` (was implicit `submit`);
  secondary/outline/ghost/link text uses the new text-safe
  `text-accent-text` token (the raw accent text failed WCAG AA), and the
  primary fill text is dark ink (`text-accent-foreground` = `#1c2126`).
- Card: the fixed v1 layout (`min-h-[302px] max-w-[306px] items-center
  justify-around` and the orange background) is gone; it is a themed
  surface card with `small`/`medium`/`large`/`full` sizes.
- Input: colors on semantic tokens (follows theme/dark mode); lucide icons
  explicitly sized at 16px; `useId()` fallback for label wiring.
- Styling is compiled with Tailwind v4 (see MIGRATION.md for details).
