import type { SxProps, Theme } from '@mui/material/styles';

export const wrapperStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'nowrap',
  gap: theme => theme.spacing(0.5),

  padding: 0,
  margin: 0,
};

export const textStyles: SxProps<Theme> = {
  flexGrow: 1,
  cursor: 'pointer',
  padding: 1,
};
