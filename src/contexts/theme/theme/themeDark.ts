import { createTheme } from '@mui/material/styles';

import { themeCore } from '../core';
import { palette } from '../palettes/themePaletteDark';

export const themeDark = createTheme(themeCore, {
  palette,
});
