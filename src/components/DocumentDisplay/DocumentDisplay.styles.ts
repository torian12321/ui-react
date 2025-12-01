import type { SxProps, Theme } from '@mui/material';

import { scrollBarStyles } from 'src/contexts/Provider.styles';

export const wrapperStyles: SxProps<Theme> = {
  flexGrow: 1,

  minHeight: '250px',
  maxHeight: '80vh',

  padding: theme => theme.spacing(2),
  overflow: 'auto',

  textWrap: 'pretty',
  wordWrap: 'break-word',
  whiteSpace: 'normal',

  fontFamily: theme => theme.typography.fontFamily,
  fontWeight: theme => theme.typography.fontWeightRegular,
  fontSize: theme => theme.typography.htmlFontSize,

  background: theme => theme.palette.background.paper,
  color: theme => theme.palette.text.primary,
  border: theme => `1px solid ${theme.palette.divider}`,
  borderRadius: 1,
  ...scrollBarStyles,
};

export const contentStyles: SxProps<Theme> = {
  padding: 0,
  display: 'ruby',
  fontSize: theme => theme.typography.pxToRem(14),
  lineHeight: 1.5,

  'h1, h2, h3, h4, h5, h6': {
    margin: theme => theme.spacing(0, 0, 1, 0),
    '*': {
      display: 'inline',
    },
  },

  '& p': {
    margin: theme => theme.spacing(1, 0),
  },

  /*****************************************/
  /* Styles for classes generated from BE **/
  /*****************************************/

  '.lwb_strike, .lwb_insert': {
    margin: 0,
    padding: 0,
    borderRadius: 0,
  },
  '.lwb_strike': {
    textDecoration: 'line-through',
    color: theme => theme.palette.error.contrastText,
    background: theme => theme.palette.error.light,
  },
  '.lwb_insert': {
    textDecoration: 'underline',
    color: theme => theme.palette.success.contrastText,
    background: theme => theme.palette.success.light,
  },
};
