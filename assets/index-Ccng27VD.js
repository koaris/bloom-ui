var tailwindColors = {
  neutral: "#FFFFFF",
  neutral100: "#FEFEFE",
  neutral200: "#F6F6F6",
  neutral300: "#E3E3E2",
  neutral400: "#818484",
  neutral500: "#9D9D9D",
  neutral600: "#323C45",
  neutral800: "#1C2126",
  neutral900: "#333333",
  neutral1000: "#000000",
  orange300: "#F29F46",
  orange400: "#F28146",
  orange500: "#F36246",
  orange600: "#F2464B",
  blue500: "#46D7F2",
  green500: "#46F2AF",
  red100: "#F7B0C8",
  red300: "#F278A1",
  red500: "#E91E63",
  red700: "#DE0059",
  red900: "#9E003F"
};
var colors = Object.fromEntries(
  Object.entries(tailwindColors).map(([key, value]) => [
    key === "neutral" || key === "black" ? key : key.replace(/(\D+)(\d+)/, "$1-$2"),
    value
  ])
);
var lightTheme = {
  bg: "251 250 248",
  surface: "255 255 255",
  "surface-sunken": "245 243 239",
  ink: "28 26 23",
  "ink-muted": "107 101 92",
  "ink-faint": "115 107 96",
  rule: "232 228 220",
  accent: "193 63 39",
  "accent-hover": "171 51 30",
  "accent-contrast": "255 255 255",
  "accent-wash": "252 237 232"
};
var darkTheme = {
  bg: "26 23 20",
  surface: "34 30 26",
  "surface-sunken": "20 18 16",
  ink: "236 231 223",
  "ink-muted": "166 158 146",
  "ink-faint": "158 150 138",
  rule: "51 46 39",
  accent: "255 122 94",
  "accent-hover": "255 145 121",
  "accent-contrast": "26 23 20",
  "accent-wash": "44 32 26"
};
var fontStacks = {
  sans: '"Ubuntu Sans", Helvetica, Arial, sans-serif',
  mono: '"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace'
};
var themeRadii = {
  sm: "6px",
  DEFAULT: "10px"
};
var lightShadows = {
  sm: "0 1px 2px rgb(28 26 23 / 0.05)",
  DEFAULT: "0 1px 3px rgb(28 26 23 / 0.06), 0 8px 24px -8px rgb(28 26 23 / 0.10)"
};
var darkShadows = {
  sm: "0 1px 2px rgb(0 0 0 / 0.3)",
  DEFAULT: "0 1px 3px rgb(0 0 0 / 0.35), 0 8px 24px -8px rgb(0 0 0 / 0.5)"
};
var suffix = (key) => key === "DEFAULT" ? "" : `-${key}`;
var colorVars = (theme) => Object.fromEntries(
  Object.entries(theme).map(([name, channels]) => [`--${name}`, channels])
);
var shadowVars = (shadows) => Object.fromEntries(
  Object.entries(shadows).map(([key, value]) => [
    `--shadow${suffix(key)}`,
    value
  ])
);
({
  light: {
    ...colorVars(lightTheme),
    ...Object.fromEntries(
      Object.entries(themeRadii).map(([key, value]) => [
        `--radius${suffix(key)}`,
        value
      ])
    ),
    ...shadowVars(lightShadows)
  },
  dark: {
    ...colorVars(darkTheme),
    ...shadowVars(darkShadows)
  }
});
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.75rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var fonts = {
  default: fontStacks.sans,
  code: fontStacks.mono
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
export {
  fontWeights as a,
  fonts as b,
  colors as c,
  lightTheme as d,
  darkTheme as e,
  fontSizes as f,
  lineHeights as l,
  radii as r,
  space as s,
  themeRadii as t
};
