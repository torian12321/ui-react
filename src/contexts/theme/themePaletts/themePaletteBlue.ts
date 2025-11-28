import { createTheme } from '@mui/material/styles';

import { themeCore } from './core';

/** Old Propylon theme */
export const themePaletteBlue = createTheme(themeCore, {
  palette: {
    mode: 'light',
    primary: {
      main: '#3f3d6b',
      dark: '#2d2b54',
      light: '#6f6d99',
      contrastText: '#fff',
    },
    secondary: {
      main: '#efa000',
      dark: '#ffa726',
      light: '#ffd799',
      contrastText: '#fff',
    },
    info: {
      main: '#3196f3',
      dark: '#2b82e8',
      light: '#91c6f9',
      contrastText: '#fff',
    },
    background: {
      default: '#f0f0f7',
    },
  },
});
