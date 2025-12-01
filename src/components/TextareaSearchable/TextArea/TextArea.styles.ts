import type { SxProps, Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

import { scrollBarStyles } from 'src/contexts/Provider.styles';

export const wrapperStyles: SxProps<Theme> = {
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '48px',
  padding: theme => theme.spacing(2),
  textWrap: 'pretty',
  wordWrap: 'break-word',
  whiteSpace: 'pre-line',

  background: theme => theme.palette.background.paper,
  color: theme => theme.palette.text.primary,
  border: theme => `1px solid ${theme.palette.divider}`,
  borderRadius: 1,
  ...scrollBarStyles,
};

export const highlightStyles: SxProps<Theme> = {
  padding: 0,
  display: 'inline',
  color: theme => theme.palette.secondary.contrastText,
  background: theme => alpha(theme.palette.secondary.main, 0.4),
  borderColor: theme => theme.palette.secondary.main,
  borderRadius: '2px',
};

export const highlightFocusedStyles: SxProps<Theme> = {
  background: theme => alpha(theme.palette.secondary.dark, 0.5),
};
