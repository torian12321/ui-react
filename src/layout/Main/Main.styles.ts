import type { SxProps, Theme } from '@mui/material';

export const wrapperStyles: SxProps<Theme> = {
  gridArea: 'main',
  display: 'flex',
  flexDirection: 'column',
  background: theme => theme.palette.background.paper,
};
