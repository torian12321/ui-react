import type { SxProps, Theme } from '@mui/material/styles';

export const wrapperStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  gap: 1,
};

export const btnStyles: SxProps<Theme> = {
  fontSize: 22,
};
