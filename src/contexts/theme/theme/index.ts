import { ThemeOptions } from '@mui/material/styles';

import { AppThemeNames } from 'src/types';

import { themeBlue } from './themeBlue';
import { themeDark } from './themeDark';
import { themeGreen } from './themeGreen';
import { themeLight } from './themeLight';
import { themeNy } from './themeNy';
import { themePink } from './themePink';
import { themePropylon } from './themePropylon';
import { themeRwsDark } from './themeRwsDark';
import { themeRwsLight } from './themeRwsLight';
import { themeSc } from './themeSc';

export const DEFAULT_THEME = themeLight;

const themes: Record<AppThemeNames, ThemeOptions> = {
  // 360Base themes (legacy)
  light: themeLight,
  dark: themeDark,

  // RWS themes (new)
  rws: themeRwsLight,
  rwsDark: themeRwsDark,

  // Color themes
  pink: themePink,
  green: themeGreen,
  blue: themeBlue,

  // Client Themes
  propylon: themePropylon,
  sc: themeSc,
  ny: themeNy,
};

export const getThemeStyles = (theme: AppThemeNames = 'light'): ThemeOptions =>
  themes[theme] ??
  // Sometimes the `theme` passed on arg does not exist as a valid theme,
  // on that case default to `light` theme. This is happening speciall when obtaining the value from LocalStore
  DEFAULT_THEME;
