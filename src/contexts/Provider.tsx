import { type PropsWithChildren, useEffect } from 'react';
import MuiBox from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

// Initialize the localization
import 'src/localization/initialize';

import { Backdrop } from 'src/components';
import { setLanguage } from 'src/localization';

import { useGetAppLang, useGetLoadingDetails } from './appStore';
import { appGlobalStyles } from './Provider.styles';
import { SnackbarProvider } from './snackbar';
import { ThemeProvider } from './theme';

export const Provider = ({ children }: PropsWithChildren) => {
  const { isLoading, message } = useGetLoadingDetails();
  const lang = useGetAppLang();

  // Sync the language from Zustand store to i18next
  useEffect(() => {
    setLanguage(lang);
  }, [lang]);

  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <MuiBox sx={appGlobalStyles}>
        <SnackbarProvider>
          <Backdrop show={isLoading} message={message} />
          {children}
        </SnackbarProvider>
      </MuiBox>
    </ThemeProvider>
  );
};
