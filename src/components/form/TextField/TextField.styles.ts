import type { SxProps, Theme } from '@mui/material';

export const textFieldStyles: SxProps<Theme> = {
  width: '100%',
  padding: theme => `${theme.spacing(1.25)} ${theme.spacing(1.5)}`,
  minWidth: '48px',
  boxSizing: 'border-box',

  lineHeight: '1',
  fontFamily: theme => theme.typography.fontFamily,
  fontWeight: theme => theme.typography.fontWeightRegular,
  fontSize: theme => theme.typography.htmlFontSize,

  background: theme => theme.palette.background.paper,
  color: theme => theme.palette.text.primary,
  border: theme => `1px solid ${theme.palette.divider}`,
  borderRadius: 1,

  '&:disabled': {
    color: theme => theme.palette.text.disabled,
    background: theme => theme.palette.background.paper,

    '&::placeholder': {
      color: theme => theme.palette.text.disabled,
      opacity: 0.7,
    },
  },
};
