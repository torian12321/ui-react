import type { SxProps, Theme } from '@mui/material/styles';

export const wrapperStyles: SxProps<Theme> = {
  display: `flex`,
  flexDirection: `column`,
  position: `absolute`,
  inset: 0,
  background: theme => theme.palette.grey[200],
};

export const contentStyles: SxProps<Theme> = {
  display: `flex`,
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'center',
};
