import type { PropsWithChildren } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { useGetAppTheme } from 'src/contexts/appStore';

import { getThemeStyles } from './theme';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const appThemeName = useGetAppTheme();
  const theme = getThemeStyles(appThemeName);

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};
