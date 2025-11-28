import { createTheme } from '@mui/material/styles';

import { themeTypographyVariants } from './sharedThemeValues';

/** Base theme */
export const themePaletteLight = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    ...themeTypographyVariants,
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#2B579A',
      dark: '#002246',
      light: '#6183CB',
    },
    secondary: {
      main: '#18A99F',
      dark: '#10766F',
      light: '#46BAB2',
      contrastText: '#fff',
    },
    info: {
      main: '#0288D1',
      dark: '#01579B',
      light: '#03A9F4',
    },
    success: {
      main: '#2E7D32',
      dark: '#1B5E20',
      light: '#4CAF50',
    },
    warning: {
      main: '#ED6C02',
      dark: '#E65100',
      light: '#FF9800',
    },
    error: {
      main: '#D32F2F',
      dark: '#C62828',
      light: '#EF5350',
    },
    background: {
      default: '#F0F3F8',
      paper: '#fff',
    },
  },
});
