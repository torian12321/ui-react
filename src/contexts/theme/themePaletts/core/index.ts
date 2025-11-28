import { createTheme } from '@mui/material/styles';

import { breakpoints } from './breakpoints';
import { components } from './components';
import { typography } from './typography';

/** Core theme */
export const themeCore = createTheme({
  typography,
  breakpoints,
  components,
});
