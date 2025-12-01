import { createTheme } from '@mui/material/styles';

import { themeCore } from '../core';
import { palette } from '../palettes/themePaletteRwsLight';

/** Base theme */
export const themeRwsLight = createTheme(themeCore, {
  palette,
});
