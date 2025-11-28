import type { SxProps, Theme } from '@mui/material/styles';

export const btnStyles: SxProps<Theme> = {
  color: theme => theme.palette.text.primary,
  // border: theme => `1px solid ${theme.palette.divider}`,

  background: 'transparent',
  minWidth: 0,

  transition: 'opacity .4s ease-in-out',
  opacity: 0.6,

  '&:hover': {
    opacity: 1,
  },
};
