const tailwindColors = {
  white: '#FFFFFF',
  black: '#000000',
  
  white100: '#FEFEFE',
  white300: '#F6F6F6',

  orange500: '#F36246',

  gray300: '#323C45',
  gray700: '#1C2126',
}

export const colors = Object.fromEntries(
  Object.entries(tailwindColors).map(([key, value]) => [
    (key === 'white' || key === 'black') ? key : key.replace(/(\D+)(\d+)/, '$1-$2'),
    value,
  ])
);