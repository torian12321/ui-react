import { createTheme } from '@mui/material/styles';

import { themeCore } from '../core';
import { palette } from '../palettes/themePaletteRwsDark';

/** Base theme */
export const themeRwsDark = createTheme(themeCore, {
  palette,
});
