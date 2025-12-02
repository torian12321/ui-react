import type { SxProps, Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

export const wrapperStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  flexGrow: 1,
  alignItems: 'center',
  gap: 1,
  padding: 0.5,

  background: theme => theme.palette.background.paper,
  color: theme => theme.palette.text.primary,
  border: theme => `1px solid ${theme.palette.divider}`,
  borderRadius: 1,

  transition: 'border-color .4s',
  '&:focus-within': {
    borderColor: theme => theme.palette.primary.main,
  },
};

export const dividerStyles: SxProps<Theme> = {
  background: theme => theme.palette.divider,
  width: '1px',
  alignSelf: 'stretch',
  margin: '2px 0',
};

export const inputStyles: SxProps<Theme> = {
  flexGrow: 1,
  alignSelf: 'stretch',
  border: 'none',
  outline: 'none',
  fontFamily: theme => theme.typography.fontFamily,

  lineHeight: 2,
  padding: theme => `0 ${theme.spacing(1)}`,
  color: theme => theme.palette.text.primary,
  background: 'transparent',
  borderRadius: '4px',

  transition: 'background .4s',
  '&:hover:not(:focus)': {
    background: theme => alpha(theme.palette.action.active, 0.1),
  },
};
