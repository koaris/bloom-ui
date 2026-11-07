---
'@koaris/bloom-ui': major
---

Modal is built on Radix Dialog, and Card and TextInput use the theme roles. See MIGRATION.md.

Breaking changes:

- Modal is a Radix dialog. It renders into `document.body`, so the `#bloom-ui-portal-root` element is gone. Extra props now go to the dialog panel instead of the backdrop. Focus moves into the dialog when it opens and returns to the trigger when it closes, and the title is the dialog's accessible name. New optional `description` prop.
- Card drops its fixed v1 layout and orange background (`min-h-[302px] max-w-[306px] items-center justify-around`, `bg-orange-500`). It is now a theme surface card (`bg-surface`, `text-ink`, `border-rule`) sized by `size` (`small`, `medium`, `large`, `full`). A clickable Card gets `role="button"` and responds to Enter and Space.

Other changes:

- TextInput uses the theme roles and sets `aria-invalid` when `error` is set.
- Input falls back to a generated id, so its label, error and helper text stay linked when no `id` is passed.
- Toast ids are unique even when two toasts are created in the same millisecond, and a standalone `<Toast>` hides itself after closing even without `onDismiss`.
- `tailwind-merge` (now v3), `clsx`, `class-variance-authority` and `@radix-ui/react-dialog` are dependencies, and `@tailwindcss/cli` moved to devDependencies. The build starts with a `'use client'` banner for React Server Components.
