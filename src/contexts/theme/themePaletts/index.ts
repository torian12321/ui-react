import { ThemeOptions } from '@mui/material/styles';

import { AppThemeNames } from 'src/types';

import { themePaletteBlue } from './themePaletteBlue';
import { themePaletteDark } from './themePaletteDark';
import { themePaletteGreen } from './themePaletteGreen';
import { themePaletteLight } from './themePaletteLight';
import { themePaletteNy } from './themePaletteNy';
import { themePalettePink } from './themePalettePink';
import { themePalettePropylon } from './themePalettePropylon';
import { themePaletteSc } from './themePaletteSc';

export const DEFAULT_THEME = themePaletteLight;

const themes: Record<AppThemeNames, ThemeOptions> = {
  // Base themes
  light: themePaletteLight,
  dark: themePaletteDark,

  // Color themes
  pink: themePalettePink,
  green: themePaletteGreen,
  blue: themePaletteBlue,

  // Client Themes
  propylon: themePalettePropylon,
  sc: themePaletteSc,
  ny: themePaletteNy,
};

export const getThemeStyles = (theme: AppThemeNames = 'light'): ThemeOptions =>
  themes[theme] ??
  // Sometimes the `theme` passed on arg does not exist as a valid theme,
  // on that case default to `light` theme. This is happening speciall when obtaining the value from LocalStore
  DEFAULT_THEME;
