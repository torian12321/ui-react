import type { PropsWithChildren } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { themeWord } from './theme/themeWord';

/**
 * Word-specific theme overrides.
 * Extends the base theme from @propylon/ui with Word app customizations.
 */
export const ThemeProviderWord = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={themeWord}>{children}</ThemeProvider>
);
