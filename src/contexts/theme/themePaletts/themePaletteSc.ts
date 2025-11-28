import { createTheme } from '@mui/material/styles';

/**  South Carolina theme */
export const themePaletteSc = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
  palette: {
    primary: {
      main: '#0c1a4e',
      dark: '#000026',
      light: '#A2A3C6',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f2b333',
      main: '#efa000',
      dark: '#ffa726',
    },
    background: {
      default: '#eee',
    },
  },
});
