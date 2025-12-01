import { createTheme } from '@mui/material/styles';

import { themeCore } from '../core';
import { palette } from '../palettes/themePalettePropylon';

export const themePropylon = createTheme(themeCore, {
  palette,
});
