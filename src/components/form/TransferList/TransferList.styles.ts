import type { SxProps, Theme } from '@mui/material/styles';

export const wrapperStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  gap: 1,
};
