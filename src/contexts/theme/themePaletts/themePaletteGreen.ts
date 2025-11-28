import { createTheme } from '@mui/material/styles';

import { themeCore } from './core';

export const themePaletteGreen = createTheme(themeCore, {
  palette: {
    mode: 'light',
    primary: {
      main: '#169616',
      dark: '#106410',
      light: '#20C220',
      contrastText: '#fff',
    },
    secondary: {
      main: '#961696',
      dark: '#961696',
      light: '#961696',
      contrastText: '#fff',
    },
    background: {
      default: '#f0f0f7',
    },
  },
});
