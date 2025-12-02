import type { SxProps } from '@mui/material/styles';

// CreateRequest Styles
export const stylesHalfRow: SxProps = {
  width: '50%',
};
export const stylesInlined: SxProps = {
  display: 'inline-block',
};

export const stylesLastRow: SxProps = {
  width: '25%',
  display: 'inline-block',

  '& > div': {
    flexDirection: 'row',
    alignItems: 'center',
  },
  '.MuiCheckbox-root': {
    padding: 0,
  },
};
