import type { JSX } from 'react';
import MuiBox from '@mui/material/Box';

import { useCombineSxStyles } from 'src/utils';

import { bodyStyles } from './InnerToolBar.styles';
import type { InnerToolBarBodyProps } from './InnerToolbar.types';

export const Body = ({
  children,
  'data-testid': dataTestid,
  sx,
}: InnerToolBarBodyProps): JSX.Element => {
  const sxStyles = useCombineSxStyles(bodyStyles, sx);

  return (
    <MuiBox data-testid={dataTestid} sx={sxStyles}>
      {children}
    </MuiBox>
  );
};
