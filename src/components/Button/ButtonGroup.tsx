import type { PropsWithChildren } from 'react';
import MuiBox from '@mui/material/Box';

import { useCombineSxStyles } from 'src/utils';

import { buttonGroupStyles } from './Button.styles';
import type { ButtonGroupProps } from './Button.types';

export const ButtonGroup = ({
  children,
  'data-testid': dataTestid,
  direction = 'row',
  align = 'start',
  sx,
}: PropsWithChildren<ButtonGroupProps>) => {
  const sxStyles = useCombineSxStyles(
    buttonGroupStyles({ direction, align }),
    sx,
  );

  return (
    <MuiBox sx={sxStyles} data-testid={dataTestid}>
      {children}
    </MuiBox>
  );
};
