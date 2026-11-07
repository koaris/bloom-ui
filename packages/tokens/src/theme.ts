/**
 * Semantic theme tokens.
 *
 * Colours are space-separated RGB channels, so CSS can apply alpha with
 * `rgb(var(--accent) / 0.4)` and Tailwind opacity modifiers (`bg-accent/40`)
 * keep working. `lightTheme` is the default; `darkTheme` swaps in under
 * `prefers-color-scheme: dark`. Components use the roles, never raw palette
 * values, so both schemes come for free.
 */
export const lightTheme = {
  bg: '251 250 248',
  surface: '255 255 255',
  'surface-sunken': '245 243 239',

  ink: '28 26 23',
  'ink-muted': '107 101 92',
  'ink-faint': '115 107 96',

  rule: '232 228 220',

  accent: '193 63 39',
  'accent-hover': '171 51 30',
  'accent-contrast': '255 255 255',
  'accent-wash': '252 237 232',
}

export type ThemeColor = keyof typeof lightTheme

export const darkTheme: Record<ThemeColor, string> = {
  bg: '26 23 20',
  surface: '34 30 26',
  'surface-sunken': '20 18 16',

  ink: '236 231 223',
  'ink-muted': '166 158 146',
  'ink-faint': '158 150 138',

  rule: '51 46 39',

  accent: '255 122 94',
  'accent-hover': '255 145 121',
  'accent-contrast': '26 23 20',
  'accent-wash': '44 32 26',
}

export const fontStacks = {
  sans: '"Ubuntu Sans", Helvetica, Arial, sans-serif',
  mono: '"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
}

/** Corner radii: `sm` for controls, the default for cards and frames. */
export const themeRadii = {
  sm: '6px',
  DEFAULT: '10px',
}

export const lightShadows = {
  sm: '0 1px 2px rgb(28 26 23 / 0.05)',
  DEFAULT:
    '0 1px 3px rgb(28 26 23 / 0.06), 0 8px 24px -8px rgb(28 26 23 / 0.10)',
}

export const darkShadows: typeof lightShadows = {
  sm: '0 1px 2px rgb(0 0 0 / 0.3)',
  DEFAULT: '0 1px 3px rgb(0 0 0 / 0.35), 0 8px 24px -8px rgb(0 0 0 / 0.5)',
}

const suffix = (key: string) => (key === 'DEFAULT' ? '' : `-${key}`)

const colorVars = (theme: Record<ThemeColor, string>) =>
  Object.fromEntries(
    Object.entries(theme).map(([name, channels]) => [`--${name}`, channels]),
  )

const shadowVars = (shadows: typeof lightShadows) =>
  Object.fromEntries(
    Object.entries(shadows).map(([key, value]) => [
      `--shadow${suffix(key)}`,
      value,
    ]),
  )

/**
 * The CSS custom properties behind the theme, ready for a Tailwind plugin's
 * `addBase` or a hand-written stylesheet: put `light` on `:root` and `dark` on
 * `:root` inside `@media (prefers-color-scheme: dark)`.
 */
export const themeCssVariables = {
  light: {
    ...colorVars(lightTheme),
    ...Object.fromEntries(
      Object.entries(themeRadii).map(([key, value]) => [
        `--radius${suffix(key)}`,
        value,
      ]),
    ),
    ...shadowVars(lightShadows),
    '--font-sans': fontStacks.sans,
    '--font-mono': fontStacks.mono,
    '--background': 'rgb(var(--bg))',
    '--foreground': 'rgb(var(--ink))',
  } as Record<string, string>,
  dark: {
    ...colorVars(darkTheme),
    ...shadowVars(darkShadows),
  } as Record<string, string>,
}

const role = (name: ThemeColor) => `rgb(var(--${name}) / <alpha-value>)`

/**
 * Tailwind `theme.extend.colors` entries that resolve to the CSS variables
 * above: `bg-bg`, `bg-surface`, `bg-surface-sunken`, `text-ink`,
 * `text-ink-muted`, `text-ink-faint`, `border-rule`, `bg-accent`,
 * `hover:bg-accent-hover`, `text-accent-contrast`, `bg-accent-wash`.
 */
export const semanticColors = {
  background: role('bg'),
  foreground: role('ink'),
  bg: role('bg'),
  surface: {
    DEFAULT: role('surface'),
    sunken: role('surface-sunken'),
  },
  ink: {
    DEFAULT: role('ink'),
    muted: role('ink-muted'),
    faint: role('ink-faint'),
  },
  rule: role('rule'),
  accent: {
    DEFAULT: role('accent'),
    hover: role('accent-hover'),
    contrast: role('accent-contrast'),
    wash: role('accent-wash'),
  },
}

/**
 * Tailwind v3 `theme.extend` entries for the radius, shadow and font roles:
 * `rounded` (controls), `rounded-lg` (cards), `shadow-sm`, `shadow`,
 * `font-sans`, `font-mono`. Tailwind v4 reserves these variable names in its
 * own theme, so v4 builds map them in CSS instead (see bloom-ui's stylesheet).
 */
export const semanticRadii = {
  DEFAULT: 'var(--radius-sm)',
  lg: 'var(--radius)',
}

export const semanticShadows = {
  sm: 'var(--shadow-sm)',
  DEFAULT: 'var(--shadow)',
}

export const semanticFonts = {
  sans: ['var(--font-sans)', 'Helvetica', 'Arial', 'sans-serif'],
  mono: [
    'var(--font-mono)',
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'monospace',
  ],
}
