import { createTheme, ThemeOptions } from '@mui/material/styles';

import { themeCore } from '../core';
import { palette } from '../palettes/themePalettePink';

export const themePink: ThemeOptions = createTheme(themeCore, {
  palette,

  // Override typography
  typography: {
    fontFamily: 'Courier, monospace',
  },
  // Override shape
  shape: {
    borderRadius: 12,
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
