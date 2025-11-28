import type { SxProps, Theme } from '@mui/material';

export const wrapperStyles: SxProps<Theme> = {
  position: 'relative',
  textAlign: 'justify',
  background: theme => theme.palette.background.default,
  color: theme => theme.palette.text.primary,
  boxShadow: 'none',
  zIndex: theme => theme.zIndex.drawer + 1,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
};

export const toolbarStyles: SxProps<Theme> = {
  position: 'relative',
  background: theme => theme.palette.background.default,
  color: theme => theme.palette.text.primary,
  boxShadow: 'none',
  zIndex: theme => theme.zIndex.drawer + 1,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
};

export const headerStyles: SxProps<Theme> = {
  marginTop: 2,
  marginBottom: 1.25,
  paddingBottom: theme => theme.spacing(1),
  borderColor: theme => theme.palette.text.secondary,
  borderBottom: '1px solid',
  lineHeight: 1.25,
  fontSize: '1.25rem',
};

export const bodyStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
};
