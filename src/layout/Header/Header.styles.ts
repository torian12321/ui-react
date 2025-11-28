import type { SxProps, Theme } from '@mui/material';

export const wrapperStyles: SxProps<Theme> = {
  gridArea: 'header',
  position: 'relative',
  textAlign: 'left',
  color: theme => theme.palette.text.primary,
  boxShadow: theme => theme.shadows[5],
  zIndex: theme => theme.zIndex.drawer + 2,
};

export const toolBarStyles: SxProps<Theme> = {
  minHeight: '4.375rem',
};

export const titleStyles: SxProps<Theme> = {
  flexGrow: 1,
  margin: '0 0 0 1rem',
};

export const contentStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 1,
};

export const logoStyles: SxProps<Theme> = {
  width: `150px`,
  marginX: theme => theme.spacing(2),
};
