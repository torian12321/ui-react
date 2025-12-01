import { createTheme } from '@mui/material/styles';

import { themeCore } from '../core';
import { palette } from '../palettes/themePaletteBlue';

export const themeBlue = createTheme(themeCore, {
  palette,
});
