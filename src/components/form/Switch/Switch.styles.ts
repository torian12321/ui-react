import type { SxProps, Theme } from '@mui/material';

export const wrapperStyles: SxProps<Theme> = {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 1,
  cursor: 'pointer',
};

export const sliderStyles: SxProps<Theme> = {
  position: 'relative',
  display: 'inline-block',
  boxSizing: 'border-box',
  fontSize: '18px',
  height: '1em',
  aspectRatio: 1.8,
  border: '1px solid',
  borderColor: theme => theme.palette.action.selected,
  borderRadius: '.5em',
  cursor: 'pointer',

  background: theme => theme.palette.action.selected,
  transition: '0.4s background. outline',

  '&[data-is-checked="true"]': {
    background: theme => theme.palette.secondary.main,
  },
  '&[data-is-disabled="true"]': {
    background: theme => theme.palette.action.disabled,
    cursor: 'default',
  },
};

export const inputStyles: SxProps<Theme> = {
  // Hide the input element visually but keep it accessible for keyboard navigation
  width: 0,
  height: 0,
  zIndex: -99,

  // Keyboard focus indicator
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'transparent',
    borderRadius: '.5em',
    outline: theme => `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '3px',
    opacity: 0,
    cursor: 'pointer',
    transition: '0.4s opacity',
  },
  '&:focus-visible::before': {
    opacity: 1,
  },
};

export const knobStyles: SxProps<Theme> = {
  position: 'absolute',
  inset: 0,
  top: '50%',
  left: '25%',
  height: '.65em',
  aspectRatio: 1,
  background: theme => theme.palette.secondary.contrastText,
  borderRadius: '50%',
  transition: '0.4s left',
  transform: 'translate(-50%, -50%)',

  '&[data-is-checked="true"]': {
    left: '75%',
  },
};
