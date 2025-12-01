import type { SxProps, Theme } from '@mui/material/styles';

import { scrollBarStyles } from 'src/contexts/Provider.styles';

export const headerCloseIconStyles: SxProps<Theme> = {
  height: '100%',
  mt: '-4px',

  '& svg': {
    display: 'flex',
    color: theme => theme.palette.text.primary,
  },
};

export const headerTitleStyles: SxProps<Theme> = {
  display: 'flex',
  flex: 1,
};

export const bodyStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
  scrollbarGutter: 'stable both-edges',
  px: '12px',
  ...scrollBarStyles,

  '@media print': {
    overflowX: 'hidden',
  },
};

export const headerStyles: SxProps<Theme> = {
  display: 'flex',
  displayPrint: 'none',
  lineHeight: '4em',
  background: theme => theme.palette.background.default,
  borderBottom: theme => `1px solid ${theme.palette.action.disabledBackground}`,
};

export const footerStyles: SxProps<Theme> = {
  width: '100%',
  boxSizing: 'border-box',
  background: theme => theme.palette.background.default,

  '@media print': {
    display: 'none',
  },
};

export const footerHelperTextStyles: SxProps<Theme> = {
  flexGrow: 1,
  fontWeight: 400,
  color: theme => theme.palette.error.main,
  margin: theme => `0 ${theme.spacing(3)}`,
  alignSelf: 'center',
};
