import type { PaletteOptions } from '@mui/material';

/** Base theme */
export const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#8353fd',
    dark: '#3e016f',
    light: '#c39dff',
    contrastText: '#fff',
  },
  secondary: {
    main: '#e60054',
    dark: '#990033',
    light: '#ff6699',
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
};
