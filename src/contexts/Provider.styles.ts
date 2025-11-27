import type { SxProps, Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

export const scrollBarStyles: SxProps<Theme> = {
  scrollbarColor: theme =>
    `${alpha(theme.palette.primary.light, 0.5)} ${theme.palette.background.default}`,
  scrollbarWidth: 'thin',
};

export const appGlobalStyles: SxProps<Theme> = {
  '*': { ...scrollBarStyles },
};
