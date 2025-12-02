import type { SxProps, Theme } from '@mui/material/styles';

export const fieldStyles: SxProps<Theme> = {
  width: '100%',
};

export const messageStyles: SxProps<Theme> = {
  marginTop: 3,
  display: 'flex',
  alignItems: 'flex-start',
  gap: 1,

  fontSize: '0.875rem',
  fontWeight: 'bold',
};
