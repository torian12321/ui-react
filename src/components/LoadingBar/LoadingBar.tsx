import type { JSX } from 'react';
import MuiLinearProgress from '@mui/material/LinearProgress';

import { combineSxStyles } from 'src/utils';

import { wrapperStyles } from './LoadingBar.styles';
import type { LoadingBarProps } from './LoadingBar.types';

export const LoadingBar = ({
  'data-testid': dataTestid = 'loader-bar',
  show = true,
  sx,
}: LoadingBarProps): JSX.Element | null =>
  show ? (
    <MuiLinearProgress
      role='status'
      data-testid={dataTestid}
      sx={combineSxStyles(wrapperStyles, sx)}
    />
  ) : null;
