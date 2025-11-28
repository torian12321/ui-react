import type { PaletteMode } from '@mui/material';
import type { ThemeOptions } from '@mui/material/styles';

import { useGetAppTheme } from 'src/contexts/appStore';

import { getThemeStyles } from './themePaletts';

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
