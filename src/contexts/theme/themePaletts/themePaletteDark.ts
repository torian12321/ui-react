import { createTheme } from '@mui/material/styles';

import { themeCore } from './core';

export const themePaletteDark = createTheme(themeCore, {
  palette: {
    mode: 'dark',
    primary: {
      main: '#2B579A',
      dark: '#002246',
      light: '#6183CB',
    },
    secondary: {
      main: '#18A99F',
      dark: '#10766F',
      light: '#46BAB2',
    },
    info: {
      main: '#03A9F4',
      dark: '#0288D1',
      light: '#81D4FA',
    },
    success: {
      main: '#4CAF50',
      dark: '#2E7D32',
      light: '#81C784',
    },
    warning: {
      main: '#FF9800',
      dark: '#ED6C02',
      light: '#FFB74D',
    },
    error: {
      main: '#EF5350',
      dark: '#D32F2F',
      light: '#E57373',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
});
