import type { SxProps, Theme } from '@mui/material/styles';

import { btnColors } from '../ButtonSelector/ButtonSelector.styles';

export const btnStyles: SxProps<Theme> = {
  height: '30px',
  minWidth: '30px',
  padding: 0,

  ...btnColors,

  '& svg': {
    fontSize: '2em',
  },
};
