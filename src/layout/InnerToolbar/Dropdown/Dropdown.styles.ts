import type { SxProps, Theme } from '@mui/material';

export const wrapperStyles: SxProps<Theme> = {
  minWidth: '240px',
  maxWidth: '300px',
};

export const dropdownStyles: SxProps<Theme> = {
  width: '100%',
  textAlign: 'left',
  background: theme => theme.palette.background.paper,
};
