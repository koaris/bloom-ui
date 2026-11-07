import { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  semanticColors,
  themeCssVariables,
} from '@koaris/tokens'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: { ...colors, ...semanticColors },
      fontSize: fontSizes,
      fontWeight: fontWeights,
      fontFamily: fonts,
      lineHeight: lineHeights,
      keyframes: {
        'pulse-once': {
          from: { opacity: '0.35' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'pulse-once': 'pulse-once 0.4s ease-out',
      },
    },
  },
  plugins: [
    // Theme roles as CSS variables: light by default, dark under the OS
    // preference. No class toggle and no `dark:` variants are needed.
    plugin(({ addBase }) => {
      addBase({
        ':root': themeCssVariables.light,
        '@media (prefers-color-scheme: dark)': {
          ':root': themeCssVariables.dark,
        },
      })
    }),
  ],
} satisfies Config
