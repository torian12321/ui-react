import type { SxProps, Theme } from '@mui/material';
import { lighten } from '@mui/material/styles';

// Colors for the button selector and button add
export const btnColors: SxProps<Theme> = {
  color: theme => theme.palette.primary.main,
  background: theme => lighten(theme.palette.primary.light, 0.8),
};

export const buttonStyles: SxProps<Theme> = {
  maxWidth: '300px',
  ...btnColors,
};
