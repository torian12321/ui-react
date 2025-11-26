import type { SxProps, Theme } from '@mui/material';
import { alpha } from '@mui/material/styles';

export const groupStyles: SxProps<Theme> = {
  '& > *': {
    marginBottom: 1,
  },
  '& > *:last-child': {
    marginBottom: 0,
  },
};

export const wrapperStyles: SxProps<Theme> = {
  overflow: 'hidden',

  borderRadius: 1,
  border: theme => `1px solid ${theme.palette.divider}`,
  backgroundColor: theme => theme.palette.background.paper,

  // Header styles
  '& .MuiAccordionSummary-root': {
    transition: 'background .4s, opacity .4s',
  },

  '&[data-highlighted="true"]': {
    borderColor: theme => alpha(theme.palette.primary.main, 0.4),

    '.MuiAccordionSummary-root': {
      background: theme => alpha(theme.palette.primary.main, 0.2),
    },
  },
};

export const headerWrapperStyles: SxProps<Theme> = {
  background: theme => theme.palette.background.default,
  flexDirection: 'row-reverse',

  '& .MuiAccordionSummary-content': {
    margin: 0,
  },

  '.MuiAccordionSummary-expandIconWrapper': {
    borderRadius: '50%',
    transition: 'background .4s, transform .2s',
  },

  '&:not(:disabled) .MuiAccordionSummary-expandIconWrapper:hover': {
    background: theme => alpha(theme.palette.action.active, 0.1),
  },
  '&:not(:disabled):focus .MuiAccordionSummary-expandIconWrapper': {
    background: theme => alpha(theme.palette.action.active, 0.1),
  },
};
export const headerStyles: SxProps<Theme> = {
  display: 'inline-flex',
  flexGrow: 1,
  paddingLeft: 1,
  alignItems: 'center',
};
export const headerTitleStyles: SxProps<Theme> = {
  flexGrow: 1,
};
export const headerActionsStyles: SxProps<Theme> = {
  marginBottom: '-4px',
  display: 'inline-flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  gap: 0.5,
};

export const bodyStyles: SxProps<Theme> = {
  backgroundColor: theme => theme.palette.background.paper,
};

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
  fontSize: 30,
  height: '1em',
  aspectRatio: 1,

  background: 'transparent',
  color: theme => theme.palette.text.primary,
  outline: 'none',
  border: 'none',
  borderRadius: '4px',

  transition: 'background .4s, opacity .4s',
  opacity: 0.8,

  svg: {
    ...centeredStyles,
    fontSize: '.5em',
  },

  '&:not(:disabled)': {
    cursor: 'pointer',

    '&:hover, &:focus-within': {
      opacity: 1,
      background: theme => alpha(theme.palette.action.active, 0.1),
    },
  },

  '&:disabled': {
    color: theme => theme.palette.text.disabled,
    borderColor: theme => theme.palette.divider,
  },

  '&[data-highlighted="true"]': {
    background: theme => alpha(theme.palette.primary.main, 0.4),
  },
};
