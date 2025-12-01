import type { SxProps, Theme } from '@mui/material';

export const wrapperStyles: SxProps<Theme> = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 4px',
  width: '280px',

  boxShadow: 'none',
  boxSizing: 'border-box',

  background: theme => theme.palette.background.paper,
  color: theme => theme.palette.text.primary,
  outline: theme => `0 solid ${theme.palette.primary.main}`,
  outlineOffset: '-1px',
  border: theme => `1px solid ${theme.palette.divider}`,
  borderRadius: 1,

  '&:hover': {
    outlineWidth: 1,
  },
  '&:focus-within': {
    outlineWidth: 2,
  },

  transition: 'width 0.3s ease-in-out',
  '&:focus-within, &.has-value': {
    width: '400px',
  },
};

export const inputStyles: SxProps<Theme> = {
  ml: 1,
  flex: 1,
};

export const iconStyles: SxProps<Theme> = {
  margin: 0,
  padding: '4px',
};

export const dividerStyles: SxProps<Theme> = {
  height: 24,
  m: 0.5,
};
