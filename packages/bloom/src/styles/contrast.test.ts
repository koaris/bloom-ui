import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

// Guards the WCAG AA guarantees of the accent pairs declared in the
// token CSS files. If a token value changes without keeping 4.5:1,
// this fails. Ratios computed with the WCAG 2.x relative-luminance
// formula; AA for normal text is 4.5:1.

const tokensDir = join(process.cwd(), '../tokens')

const read = (p: string) => readFileSync(join(tokensDir, p), 'utf8')

/** Pulls the value of `--name` from `css`, within the block that also
 * contains `anchor` (so light/dark blocks can be told apart). */
function varIn(css: string, name: string, anchor: string): string {
  const blockStart = css.indexOf(anchor)
  expect(blockStart, `anchor ${anchor} not found`).toBeGreaterThan(-1)
  const match = css
    .slice(blockStart)
    .match(new RegExp(`${name}:\\s*(#[0-9a-fA-F]{3,8})`))
  expect(match, `${name} not found after ${anchor}`).toBeTruthy()
  return match![1]
}

function luminance(hex: string): number {
  const h = hex.replace('#', '')
  const channels = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255)
  const [r, g, b] = channels.map((c) =>
    c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4,
  )
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function contrast(fg: string, bg: string): number {
  const [hi, lo] = [luminance(fg), luminance(bg)].sort((a, b) => b - a)
  return (hi + 0.05) / (lo + 0.05)
}

const theme = read('src/theme.css')
const koaris = read('themes/koaris.css')

describe('accent contrast (WCAG AA >= 4.5:1)', () => {
  it.each([
    [
      'default/Koris light: accent-foreground on the accent fill',
      varIn(theme, '--accent-foreground', ':root,\n:host'),
      '#f36246',
    ],
    [
      'default/Koris light: accent-text on white',
      varIn(theme, '--accent-text', ':root,\n:host'),
      '#ffffff',
    ],
    [
      'default/Koris dark: accent-text on the dark surface',
      varIn(theme, '--accent-text', '.dark {'),
      '#1c2126',
    ],
    [
      'Koaris light: accent-foreground (white) on the rust fill',
      varIn(koaris, '--accent-foreground', ':root,'),
      '#c13f27',
    ],
    [
      'Koaris light: accent-text (rust) on white',
      varIn(koaris, '--accent-text', ':root,'),
      '#ffffff',
    ],
    [
      'Koaris dark: accent-text on the dark surface',
      varIn(koaris, '--accent-text', '.dark {'),
      '#1c2126',
    ],
  ])('%s passes AA', (_label, fg, bg) => {
    expect(contrast(fg, bg)).toBeGreaterThanOrEqual(4.5)
  })

  it('documents the expected token values', () => {
    // Keep the CSS and MIGRATION.md honest about the shipped values.
    expect(varIn(theme, '--accent-text', ':root,\n:host')).toBe('#c2410c')
    expect(varIn(theme, '--accent-foreground', ':root,\n:host')).toBe('#1c2126')
    expect(varIn(theme, '--accent-text', '.dark {')).toBe('#f36246')
    expect(varIn(koaris, '--accent', ':root,')).toBe('#c13f27')
    expect(varIn(koaris, '--accent-text', '.dark {')).toBe('#f07361')
  })
})
