# Bloom-ui
Bloom-ui is a public design system from the Koaris Project developed with React, Typescript, and Tailwind.

## Motivation
Bloom-ui is a design system developed exclusively for the Koaris project with the aim of unifying the interfaces and simplifying the construction of new React projects.

## Installation
Install the following package:
```bash
npm i @koaris/bloom-ui
```
## Usage
This design system is built with Tailwind, and you can import it into your project as follows:
In your CSS file:
```css
@import "@koaris/bloom-ui/tailwind.css";
```
Or in your JavaScript file:
```js
import '@koaris/bloom-ui/tailwind.css'
```

Components usage:
```tsx
import { Text } from '@koaris/bloom-ui'

<Text tag="p">Test</Text>
```

### Theme

The stylesheet defines the Koaris theme as CSS variables on `:root` and swaps
in dark values under `prefers-color-scheme: dark`. Components use these roles,
never raw palette colours:

`bg` · `surface` · `surface-sunken` · `ink` · `ink-muted` · `ink-faint` ·
`rule` · `accent` · `accent-hover` · `accent-contrast` · `accent-wash`

Each holds RGB channels (`--accent: 193 63 39`), so `rgb(var(--accent) / 0.4)`
works in CSS. To get the same utility classes (`bg-surface`, `text-ink-muted`,
`border-rule`, `bg-accent/40`, `rounded`, `rounded-lg`, `font-mono`) in your own
Tailwind v3 config, extend it from `@koaris/tokens`:

```ts
import { semanticColors, semanticFonts, semanticRadii, semanticShadows } from '@koaris/tokens'

export default {
  darkMode: 'media',
  theme: {
    extend: {
      colors: semanticColors,
      fontFamily: semanticFonts,
      borderRadius: semanticRadii,
      boxShadow: semanticShadows,
    },
  },
}
```

Fonts are Ubuntu Sans (text) and IBM Plex Mono (data and code); load them in
your app.

### Form and data primitives

`Button` (`primary` for the one accent action, `secondary` by default, `ghost`),
`Field` (input or `as="textarea"`, with `label`, `hint`, `error`, `mono`),
`Select`, `Range`, `ColorField`, `DropZone`, `Toggle`, `OutputPanel` (result
well with Copy and a character count; `OutputPanelStringsProvider` for `pt`),
`Faq`, `Collapsible` and the `useCopy` hook.

## Contributions and bug reports
You can follow and make contributions in [github](https://github.com/koaris/bloom-ui).

## License
Bloom-ui is open source under the [MIT License](LICENSE.md).