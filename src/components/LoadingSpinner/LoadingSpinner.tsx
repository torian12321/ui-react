import type { JSX } from 'react';
import MuiBox from '@mui/material/Box';

import { combineSxStyles } from 'src/utils';

import { circleStyles, wrapperStyles } from './LoadingSpinner.styles';
import type { LoadingSpinnerProps } from './LoadingSpinner.types';

export const LoadingSpinner = ({
  'data-testid': dataTestid = 'loader',
  show = true,
  sx,
}: LoadingSpinnerProps): JSX.Element | null =>
  show ? (
    <MuiBox
      component='div'
      role='status'
      data-testid={dataTestid}
      sx={combineSxStyles(wrapperStyles, sx)}
    >
      <MuiBox component='div' sx={circleStyles} />
    </MuiBox>
  ) : null;
