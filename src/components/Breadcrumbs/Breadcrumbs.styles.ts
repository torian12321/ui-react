import type { SxProps, Theme } from '@mui/material';

export const stepStyles: SxProps<Theme> = {
  display: 'inline-flex',
  alignItems: 'center',
  color: theme => theme.palette.text.primary,
};

export const textStyles: SxProps<Theme> = {
  alignSelf: 'baseline',
  fontSize: 'inherit',
};

export const iconStyles: SxProps<Theme> = {
  marginRight: theme => theme.spacing(0.5),
  fontSize: 'inherit',
  color: theme => theme.palette.text.secondary,
};

export const loaderStyles: SxProps<Theme> = {
  flexGrow: 1,
};
