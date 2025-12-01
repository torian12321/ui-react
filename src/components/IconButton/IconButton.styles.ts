import type { SxProps, Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

export const centeredStyles: SxProps<Theme> = {
  position: 'absolute',
  marginInline: 'auto',
  width: 'fit-content',

  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

export const btnStyles: SxProps<Theme> = {
  position: 'relative',
  fontSize: 40,
  height: '1em',
  aspectRatio: 1,
  padding: 0,

  background: theme => theme.palette.background.paper,
  color: theme => theme.palette.text.primary,
  outline: 'none',
  border: theme => `1px solid ${theme.palette.divider}`,
  borderRadius: '4px',

  transition: 'background .4s, border-color .4s',

  svg: {
    ...centeredStyles,
    fontSize: '.5em',
  },

  '&:not(:disabled)': {
    cursor: 'pointer',

    '&:hover': {
      background: theme => alpha(theme.palette.action.active, 0.1),
    },
    '&:focus-within': {
      borderColor: theme => theme.palette.primary.main,
    },
  },

  '&:disabled': {
    color: theme => theme.palette.text.disabled,
    borderColor: theme => theme.palette.divider,
  },
};

export const spinnerStyles: SxProps<Theme> = {
  ...centeredStyles,
  opacity: 0.6,
  fontSize: '.4em',
};

export const tooltipContentStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
};
