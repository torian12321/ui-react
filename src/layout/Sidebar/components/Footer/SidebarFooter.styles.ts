import type { SxProps, Theme } from '@mui/material/styles';

export const footerStyles: SxProps<Theme> = {
  width: '100%',
  padding: theme => `${theme.spacing(1)} ${theme.spacing(2.5)}`,
  textAlign: 'center',
  fontSize: '.6rem',
  fontWeight: 400,
  opacity: 0.6,
  color: theme => theme.palette.primary.contrastText,
};
