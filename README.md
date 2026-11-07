<h1 align="center" style="text-decoration: none; border-bottom: none;">
  <a href="https://koaris.github.io/bloom-ui" target="_blank" style="text-decoration: none; color: #1C2126;  ">
    Bloom-ui
  </a>
</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/@koaris/bloom-ui"><img src="https://img.shields.io/npm/dt/@koaris/bloom-ui.svg" alt="Total Downloads"></a>
    <a href="https://github.com/koaris/bloom-ui/releases"><img src="https://img.shields.io/npm/v/@koaris/bloom-ui.svg" alt="Latest Release"></a>
    <a href="https://github.com/koaris/bloom-ui/blob/main/packages/bloom/LICENSE"><img src="https://img.shields.io/npm/l/@koaris/bloom-ui.svg" alt="License"></a>
</p>

Bloom-ui is a public design system from the Koaris Project developed with React, Typescript, and Tailwind.

View docs [here](https://koaris.github.io/bloom-ui).

## Motivation
Bloom-ui is a design system developed exclusively for the Koaris project with the aim of unifying the interfaces and simplifying the construction of new React projects.

## Contributing
This project uses Turborepo and Storybook. Follow these commands to set up and run the project:

**Install dependencies:**
```bash
npm i
```

**Start the development server:**
```bash
npm run dev
```

### Changeset
This project uses Changeset with GitHub Actions to manage versioning. To create a new version, follow these steps:

1. **Create a changeset:**
   ```bash
   npm run changeset
   ```

2. **Update versions:**
   ```bash
   npm run version-packages
   ```

3. **Publish to GitHub:**
   Push your changes to GitHub, and the automated workflow will handle the release.

## Usage
This design system is built with Tailwind, and you can import it into your project as follows:

### Installation
Install the following package:
```bash
npm i @koaris/bloom-ui
```
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