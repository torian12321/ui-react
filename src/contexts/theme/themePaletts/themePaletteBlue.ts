import { createTheme } from '@mui/material/styles';

/* Old Propylon theme */
export const themePaletteBlue = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#3f3d6b',
      contrastText: '#fff',
    },
    secondary: {
      main: '#efa000',
      dark: '#ffa726',
    },
    info: {
      main: '#3196f3',
      dark: '#2b82e8',
    },
    background: {
      default: '#f0f0f7',
    },
  },
});
