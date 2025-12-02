import type { CSSProperties } from 'react';
import type { SxProps, Theme } from '@mui/material/styles';

import { scrollBarStyles } from 'src/contexts/Provider.styles';

export const wrapperStyles: SxProps<Theme> = {
  height: 300,
  width: 350,
  minWidth: 260,
  overflowY: 'hidden',
  maxHeight: 400,
  background: theme => theme.palette.background.default,

  border: theme => `1px solid ${theme.palette.divider}`,
  borderRadius: 1,
};

export const bodyStyles: SxProps<Theme> = {
  height: '100%',
  width: '100%',
  overflowY: 'auto',
};

export const listStyles: CSSProperties = {
  ...(scrollBarStyles as CSSProperties),
  background: `${(theme: Theme) => theme.palette.background.default}`,
  margin: 0,
  padding: 0,
};
