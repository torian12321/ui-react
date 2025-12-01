import type { SxProps, Theme } from '@mui/material';

export const wrapperStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: theme => theme.spacing(1),

  flexGrow: 1,
  width: '100%',
  minHeight: '160px',
  maxHeight: '240px',
};

export const headerStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  gap: theme => theme.spacing(1),
};
