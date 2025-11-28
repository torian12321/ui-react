import { createTheme, ThemeOptions } from '@mui/material/styles';

import { themeCore } from './core';

export const themePalettePink: ThemeOptions = createTheme(themeCore, {
  typography: {
    fontFamily: 'Courier, monospace',
  },
  shape: {
    borderRadius: 12,
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#F5097F',
      dark: '#C20766',
      light: '#F73D93',
      contrastText: '#fff',
    },
    secondary: {
      main: '#19F2AC',
      dark: '#14C28A',
      light: '#1BF5B3',
      contrastText: '#fff',
    },
    background: {
      default: '#f0f0f7',
    },
  },

  // Override theme components
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background:
            'linear-gradient(90deg,rgba(209, 182, 227, 1) 0%, rgba(245, 149, 149, 1) 50%, rgba(168, 207, 237, 1) 100%)',
        },
      },
    },
  },
});
