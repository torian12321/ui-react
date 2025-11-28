import { createTheme } from '@mui/material/styles';

import { themeTypographyVariants } from './sharedThemeValues';

export const themePalettePropylon = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    ...themeTypographyVariants,
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#3f3d6b',
      contrastText: '#fff',
    },
    secondary: {
      main: '#efa000',
      dark: '#ffa726',
    },
    info: {
      main: '#3196f3',
      dark: '#2b82e8',
    },
    background: {
      default: '#f0f0f7',
    },
  },
});
