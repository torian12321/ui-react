import { createTheme } from '@mui/material/styles';

import { themeCore } from './core';

/**  New York theme */
export const themePaletteNy = createTheme(themeCore, {
  palette: {
    primary: {
      main: '#2B579A',
      light: '#6183CB',
      dark: '#002F6B',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#18A99F',
      dark: '#10766F',
      light: '#46BAB2',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
    },
  },
});
