import type { SxProps, Theme } from '@mui/material';

export const containerStyle: SxProps<Theme> = {
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const progressBarContainer: SxProps<Theme> = {
  width: 300,
  pt: 3,
};

export const logoStyles: SxProps<Theme> = {
  width: `200px`,
};
