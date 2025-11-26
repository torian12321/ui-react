import type { JSX } from 'react';

import { Circle, Wrapper } from './LoadingSpinner.styles';
import type { LoadingSpinnerProps } from './LoadingSpinner.types';

export const LoadingSpinner = ({
  'data-testid': dataTestid = 'loader',
  show = true,
  sx,
}: LoadingSpinnerProps): JSX.Element | null =>
  show ? (
    <Wrapper role='status' data-testid={dataTestid} sx={sx}>
      <Circle />
    </Wrapper>
  ) : null;
