import type { PaletteMode } from '@mui/material';
import type { ThemeOptions } from '@mui/material/styles';

import { useGetAppTheme } from 'src/contexts/appStore';
import type { AppThemeNames } from 'src/types';

import { getThemeStyles } from './theme';

export const useGetTheme = (): ThemeOptions => {
  const themeName = useGetAppTheme();

  return getThemeStyles(themeName);
};

export const useGetThemeMode = (): PaletteMode => {
  const theme = useGetTheme();

  return theme?.palette?.mode ?? 'light';
};

export const useGetIsDarkMode = (): boolean =>
  Boolean(useGetThemeMode() === 'dark');

const RWS_THEMES: AppThemeNames[] = ['rws', 'rwsDark'];
export const useGetIsRwsTheme = (): boolean => {
  const themeName = useGetAppTheme();

  return RWS_THEMES.includes(themeName);
};
