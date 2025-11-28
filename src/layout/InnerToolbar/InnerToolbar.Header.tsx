import type { JSX } from 'react';
import MuiBox from '@mui/material/Box';
import MuiSkeleton from '@mui/material/Skeleton';
import MuiTypography from '@mui/material/Typography';

import { useCombineSxStyles } from 'src/utils';

import { headerStyles } from './InnerToolBar.styles';
import type { InnerToolBarHeaderProps } from './InnerToolbar.types';

export const Header = ({
  children,
  'data-testid': dataTestid,
  isLoading = false,
  sx,
}: InnerToolBarHeaderProps): JSX.Element => {
  const sxStyles = useCombineSxStyles(headerStyles, sx);

  return (
    <MuiBox data-testid={dataTestid} sx={sxStyles} component='h6'>
      {isLoading ? (
        <MuiTypography component='div' variant='h6'>
          <MuiSkeleton variant='text' />
        </MuiTypography>
      ) : (
        children
      )}
    </MuiBox>
  );
};
