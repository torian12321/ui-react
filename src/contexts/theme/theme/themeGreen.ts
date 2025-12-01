import { createTheme } from '@mui/material/styles';

import { themeCore } from '../core';
import { palette } from '../palettes/themePaletteGreen';

export const themeGreen = createTheme(themeCore, {
  palette,
});
