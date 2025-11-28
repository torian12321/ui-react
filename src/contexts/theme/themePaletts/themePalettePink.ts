import { createTheme } from '@mui/material/styles';

export const themePalettePink = createTheme({
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
      contrastText: '#fff',
    },
    secondary: {
      main: '#19F2AC',
    },
    background: {
      default: '#f0f0f7',
    },
  },
});
