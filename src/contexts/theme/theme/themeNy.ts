import { createTheme } from '@mui/material/styles';

import { themeCore } from '../core';
import { palette } from '../palettes/themePaletteNy';

export const themeNy = createTheme(themeCore, {
  palette,
});
