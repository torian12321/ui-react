import type { SxProps, Theme } from '@mui/material/styles';

export const backdropStyle: SxProps<Theme> = {
  color: theme => theme.palette.common.white,
  cursor: 'progress',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  zIndex: theme => theme.zIndex.tooltip + 1,
};

export const messageStyle: SxProps<Theme> = {
  pt: 1,
};
