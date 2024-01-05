const tailwindColors = {
  neutral: '#FFFFFF',
  neutral100: '#FEFEFE',
  neutral200: '#F6F6F6',
  neutral300: '#E3E3E2',
  neutral400: '#818484',
  neutral500: '#9D9D9D',
  neutral600: '#323C45',
  neutral800: '#1C2126',
  neutral1000: '#000000',

  orange300: '#F29F46',
  orange400: '#F28146',
  orange500: '#F36246',
  orange600: '#F2464B',

  blue500: '#46D7F2',

  green500: '#46F2AF',

  red100: '#F7B0C8',
  red300: '#F278A1',
  red500: '#E91E63',
  red700: '#DE0059',
  red900: '#9E003F',
}

export const colors = Object.fromEntries(
  Object.entries(tailwindColors).map(([key, value]) => [
    (key === 'neutral' || key === 'black') ? key : key.replace(/(\D+)(\d+)/, '$1-$2'),
    value,
  ])
);