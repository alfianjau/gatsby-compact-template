import { tailwind } from '@theme-ui/presets'

export default {
  // useCustomProperties: false,
  ...tailwind,
  styles: {
    ...tailwind.styles,
  },
  colors: {
    ...tailwind.colors,
    primary: '#1e1e1e',
    secondary: '#87733c',
    accent: '#3d3d3d',
    black: '#3d3d3d',
    gray: '#989898',
    'light-gray': '#f6f6f6',
    white: '#ffffff',
    '2px': '#3d3d3d',
    '4px': '#d8d8d8',
    danger: '#ff4646',
    success: '#89d144',
    warning: '#ffaa4b',
    transparent: '#fafafa',
  },
  fonts: {
    montserrat: 'Montserrat',
  },
  carousel: {
    primary: {
      backgroundColor: 'primary',
      '&:hover': {
        backgroundColor: 'accent',
      },
    },
  },
  links: {
    primary: {
      fontWeight: 'semi',
      color: 'gray',
      transition: '.3s ease-in',
      '&:hover': {
        color: 'primary',
      },
    },
  },
}
