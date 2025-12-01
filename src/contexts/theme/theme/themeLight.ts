import { createTheme } from '@mui/material/styles';

import { themeCore } from '../core';
import { palette } from '../palettes/themePaletteLight';

/** Base theme */
export const themeLight = createTheme(themeCore, {
  palette,
});
