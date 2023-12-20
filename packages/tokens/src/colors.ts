const tailwindColors = {
  neutral: '#FFFFFF',
  neutral100: '#FEFEFE',
  neutral300: '#F6F6F6',
  neutral500: '#999999',
  neutral600: '#323C45',
  neutral800: '#1C2126',
  neutral1000: '#000000',
  orange500: '#F36246',
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