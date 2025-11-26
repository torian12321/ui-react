import type { SxProps, Theme } from '@mui/material/styles';

export const footerStyles: SxProps<Theme> = {
  ...theme => theme.typography.h5,
  display: 'flex',
  justifyContent: 'flex-end',
  lineHeight: 1.5,
  minHeight: '1.5em',
  alignItems: 'center',

  padding: theme => `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  color: theme => theme.palette.text.secondary,
  fontSize: theme => theme.typography.fontSize,
  background: theme => theme.palette.background.paper,
  borderTop: theme => `1px solid ${theme.palette.divider}`,
  boxShadow: theme => theme.shadows[5],
};
