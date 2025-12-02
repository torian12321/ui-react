import type { SxProps, Theme } from '@mui/material/styles';

export const wrapperStyles: SxProps<Theme> = {
  position: 'relative',
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  flexWrap: 'nowrap',
  minHeight: '40px',
  gap: theme => theme.spacing(0.5),
};
