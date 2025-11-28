import { createTheme } from '@mui/material/styles';

export const themePaletteGreen = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#169616',
      contrastText: '#fff',
    },
    secondary: {
      main: '#961696',
    },
    background: {
      default: '#f0f0f7',
    },
  },
});
