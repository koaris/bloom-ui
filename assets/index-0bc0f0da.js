var tailwindColors = {
  neutral: "#FFFFFF",
  neutral100: "#FEFEFE",
  neutral200: "#F6F6F6",
  neutral300: "#E3E3E2",
  neutral400: "#818484",
  neutral500: "#9D9D9D",
  neutral600: "#323C45",
  neutral800: "#1C2126",
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
  default: "Open Sans, sans-serif",
  code: "monospace"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
var raddi = {
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
  fontSizes as f,
  lineHeights as l,
  raddi as r,
  space as s
};
