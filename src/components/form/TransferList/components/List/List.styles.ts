import type { SxProps, Theme } from '@mui/material/styles';

export const wrapperStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  flexGrow: 1,
};

export const listStyles: SxProps<Theme> = {
  width: '100%',
};

export const labelStyles: SxProps<Theme> = {
  fontSize: '1rem',
  fontWeight: 'bold',
};

export const footerStyles: SxProps<Theme> = {
  textAlign: 'right',
  fontSize: '.8rem',
  color: theme => theme.palette.text.secondary,
};
