import { Config } from 'tailwindcss'
import { colors, fontSizes, fontWeights, fonts, lineHeights, raddi, space } from '@koaris/tokens';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: colors,
      fontSize: fontSizes,
      fontWeight: fontWeights,
      fontFamily: fonts,
      lineHeight: lineHeights,
      raddi,
      space
    },
  },
  plugins: [],
} satisfies Config
