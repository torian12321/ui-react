import type { PropsWithChildren } from 'react';
import MuiBox from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

// Initialize the localization
import 'src/localization/initialize';

import { Backdrop } from 'src/components';

import { appGlobalStyles } from './Provider.styles';
// import { useGetLoadingDetails } from './appStore';
// import { appGlobalStyles } from './Provider.styles';
// import { SnackbarProvider } from './snackbar';
// import { ThemeProvider } from './theme';

export const Provider = ({ children }: PropsWithChildren) => {
  // const { isLoading, message } = useGetLoadingDetails();
  const isLoading = false;
  const message = 'Loading...';

  return (
    <>
      {/*  <ThemeProvider> */}
      <CssBaseline enableColorScheme />
      <MuiBox sx={appGlobalStyles}>
        <Backdrop show={isLoading} message={message} />
        {/* <SnackbarProvider>{children} </SnackbarProvider> */}
        {children}
      </MuiBox>
      {/* </ThemeProvider> */}
    </>
  );
};
