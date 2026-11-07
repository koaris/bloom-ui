import { describe, expect, it } from 'vitest'
import { darkTheme, lightTheme, type ThemeColor } from '@koaris/tokens'

// Guards the WCAG AA guarantees of the theme roles from @koaris/tokens. If a
// role changes without keeping 4.5:1 for the text/background pairs the
// components use, this fails. Ratios use the WCAG 2.x relative-luminance
// formula; AA for normal text is 4.5:1.

/** Theme colours are space-separated RGB channels, e.g. '193 63 39'. */
function luminance(channels: string): number {
  const [r, g, b] = channels
    .split(' ')
    .map((c) => Number(c) / 255)
    .map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function contrast(fg: string, bg: string): number {
  const [hi, lo] = [luminance(fg), luminance(bg)].sort((a, b) => b - a)
  return (hi + 0.05) / (lo + 0.05)
}

// [text role, background role]
const textPairs: [ThemeColor, ThemeColor][] = [
  ['ink', 'bg'],
  ['ink', 'surface'],
  ['ink', 'surface-sunken'],
  ['ink-muted', 'bg'],
  ['ink-muted', 'surface'],
  ['ink-muted', 'surface-sunken'],
  ['ink-faint', 'bg'],
  ['ink-faint', 'surface'],
  // links and outline buttons
  ['accent', 'bg'],
  ['accent', 'surface'],
  ['accent', 'accent-wash'],
  // primary button label, at rest and on hover
  ['accent-contrast', 'accent'],
  ['accent-contrast', 'accent-hover'],
]

describe.each([
  ['light', lightTheme],
  ['dark', darkTheme],
] as const)('%s theme contrast (WCAG AA >= 4.5:1)', (_name, theme) => {
  it.each(textPairs)('%s on %s passes AA', (fg, bg) => {
    expect(contrast(theme[fg], theme[bg])).toBeGreaterThanOrEqual(4.5)
  })
})
