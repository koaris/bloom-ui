const tailwindColors = {
  neutral: '#FFFFFF',
  neutral100: '#FEFEFE',
  neutral300: '#F6F6F6',
  neutral500: '#999999',
  neutral600: '#323C45',
  neutral800: '#1C2126',
  neutral1000: '#000000',
  orange500: '#F36246',
}

export const colors = Object.fromEntries(
  Object.entries(tailwindColors).map(([key, value]) => [
    (key === 'neutral' || key === 'black') ? key : key.replace(/(\D+)(\d+)/, '$1-$2'),
    value,
  ])
);