import type { SxProps, Theme } from '@mui/material';

export const wrapperStyles: SxProps<Theme> = {
  position: 'relative',
  minWidth: '240px',
};

export const dropdownStyles: SxProps<Theme> = {
  width: '100%',
};

export const loaderStyles: SxProps<Theme> = {
  position: 'absolute',
  right: '36px',
  top: 'calc(50% - 6px)',
  zIndex: 1,
};

export const inputStyles: SxProps<Theme> = {
  backgroundColor: theme => theme.palette.background.paper,
};
