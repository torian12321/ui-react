import { createTheme } from '@mui/material/styles';

import { themeLight } from './themeLight';

/**
 * Word-specific theme overrides.
 * Extends the base theme from @propylon/ui with Word app customizations.
 */
export const themeWord = createTheme(themeLight, {
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small', // All TextFields will be small by default
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: 'small',
      },
    },
  },
});
