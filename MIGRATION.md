# Migrating to bloom-ui 3.0

3.0 changes two components: Modal is built on Radix Dialog, and Card is a
theme surface card. Everything else is compatible with 2.x. For the 2.x
changes (theme roles, Button's default variant, the Toast redesign), see
[the bloom-ui CHANGELOG](packages/bloom/CHANGELOG.md).

React 18 and 19 are both still supported, and theming still comes from
`@koaris/bloom-ui/tailwind.css` and the `@koaris/tokens` roles.

## Modal

The props are the same (`isOpen`, `onClose`, `title`, `size`,
`showCloseButton`, `closeOnOutsideClick`, `closeOnEsc`, `footer`), plus a
new optional `description`.

- **Portal:** the modal renders into `document.body`. The
  `#bloom-ui-portal-root` element no longer exists, so remove any styles or
  queries that target it.
- **Extra props:** props such as `className`, `id` or `data-*` now go to the
  dialog panel, not the full-screen backdrop. If you passed backdrop styles
  through `className`, move them to your own wrapper.
- **Focus:** focus moves into the dialog when it opens and returns to the
  element that opened it when it closes. Tests that expected focus to stay
  on the trigger need updating.
- **Accessible name:** the visible `title` is the dialog's accessible name.
  Without a `title`, the dialog is named "Dialog".

```tsx
<Modal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Delete project"
  description="This cannot be undone."
  footer={<Button variant="primary">Delete</Button>}
>
  …
</Modal>
```

## Card

The props are the same, but the look and layout changed:

- The fixed v1 box is gone: `min-h-[302px] max-w-[306px]`, centred content
  (`items-center justify-around`) and the orange background no longer apply.
- Card is a theme surface (`bg-surface`, `text-ink`, `border-rule`) that
  follows dark mode. `size` sets its maximum width and padding: `small`,
  `medium` (default), `large` or `full`.
- `selected` and `hoverable` use the accent colour for the border.
- A Card with `onClick` gets `role="button"`, is focusable and responds to
  Enter and Space.

To keep the old orange card, pass the classes back. bloom-ui's prebuilt
`tailwind.css` no longer includes the arbitrary sizes, so this needs Tailwind
compiling your own code:

```tsx
<Card
  className="min-h-[302px] max-w-[306px] items-center justify-around bg-orange-500 text-neutral-100"
  title="…"
  content="…"
/>
```
