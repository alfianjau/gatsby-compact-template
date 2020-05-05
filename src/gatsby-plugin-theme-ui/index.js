import { tailwind } from '@theme-ui/presets'

export default {
  // useCustomProperties: false,
  useColorSchemeMediaQuery: true,
  ...tailwind,
  styles: {
    ...tailwind.styles,
  },
  colors: {
    ...tailwind.colors,
    primary: '#87733c',
    secondary: '#1e1e1e',
    accent: '#3d3d3d',
    black: '#3d3d3d',
    gray: '#8e8e8e',
    lightGray: '#8f8f8f',
    white: '#ffffff',
    danger: '#ff4646',
    success: '#89d144',
    warning: '#ffaa4b',
    transparent: '#fafafa',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
      },
    },
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
