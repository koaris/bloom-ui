import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

// Vitest runs with the package directory as cwd, so this resolves to
// packages/bloom/tailwind.css (the build output).

// The build compiles src/styles/tailwind.css (tailwindcss + theme tokens)
// into ./tailwind.css. These are the token-dependent utilities the
// components rely on; if a token is dropped from @theme, its utility
// disappears from the compiled CSS and components silently lose styles.
const requiredUtilities = [
  // typography tokens
  'text-xxs',
  'text-xs',
  'text-sm',
  'text-md',
  'text-lg',
  'text-xl',
  'text-2xl',
  'font-medium',
  'font-bold',
  'leading-tight',
  // semantic colors
  'bg-accent',
  'text-accent',
  'text-accent-foreground',
  'text-accent-text',
  'text-ink',
  'bg-surface',
  'bg-muted',
  'text-muted-foreground',
  'border-border',
  'border-accent',
  'text-danger',
  'border-danger',
  'text-success',
  'border-success',
  'ring-accent',
  'ring-offset-surface',
  // primitives still used by components
  'bg-neutral-800',
  'border-neutral-800',
  'text-neutral',
  // radii
  'rounded-xs',
  'rounded-sm',
  'rounded-md',
  'rounded-lg',
]

describe('compiled tailwind.css', () => {
  const css = readFileSync(join(process.cwd(), 'tailwind.css'), 'utf8')

  it.each(requiredUtilities)('contains the .%s utility', (utility) => {
    expect(css).toContain(`.${utility}`)
  })
})
