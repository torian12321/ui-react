import type { PropsWithChildren } from 'react';
import IconError from '@mui/icons-material/Report';
import { SnackbarProvider as NotistackSnackbarProvider } from 'notistack';

import { DismissButton } from './components/DismissButton';
import { DEFAULT_MESSAGE_DURATION } from './showMessage';

export const SnackbarProvider = ({ children }: PropsWithChildren) => (
  <NotistackSnackbarProvider
    dense
    maxSnack={5}
    autoHideDuration={DEFAULT_MESSAGE_DURATION}
    action={key => <DismissButton id={key} />}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    iconVariant={{
      // Add a custom icon for the error variant that does not look like a close button 'X'
      error: <IconError sx={{ width: 20, mr: 1 }} />,
    }}
  >
    {children}
  </NotistackSnackbarProvider>
);
