import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

// Vitest runs with the package directory as cwd, so this resolves to
// packages/bloom/tailwind.css (the build output).

// The build compiles src/styles/tailwind.css with tailwind.config.ts (which
// pulls the theme roles from @koaris/tokens) into ./tailwind.css. These are
// the token-dependent utilities the components rely on; if a token or role
// is dropped, its utility disappears from the compiled CSS and components
// silently lose styles.
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
  // theme roles
  'bg-accent',
  'text-accent',
  'text-accent-contrast',
  'border-accent',
  'text-ink',
  'text-ink-muted',
  'bg-surface',
  'bg-surface-sunken',
  'border-rule',
  // palette colours still used by components
  'bg-neutral-800',
  'border-neutral-800',
  'text-neutral',
  'border-red-900',
  // radii (rounded and rounded-lg map to the theme radius roles)
  'rounded',
  'rounded-xs',
  'rounded-sm',
  'rounded-lg',
  // Toast animations defined in src/styles/tailwind.css
  'animate-toast-in',
  'animate-toast-out',
  'animate-toast-progress',
]

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

describe('compiled tailwind.css', () => {
  const css = readFileSync(join(process.cwd(), 'tailwind.css'), 'utf8')

  it.each(requiredUtilities)('contains the .%s utility', (utility) => {
    // Match the whole class name, so `.rounded` is not satisfied by `.rounded-lg`
    expect(css).toMatch(new RegExp(`\\.${escape(utility)}[\\s,{:]`))
  })
})
