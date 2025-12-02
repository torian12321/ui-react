import type { JSX } from 'react';
import { memo } from 'react';
import MuiBox from '@mui/material/Box';
import MuiSkeleton from '@mui/material/Skeleton';

import { skeletonWrapperStyles } from './Skeleton.styles';

const TOTAL_ROWS = [...Array(10).keys()];

export const ListSkeleton = memo(
  (): JSX.Element => (
    <MuiBox
      component='ul'
      data-testid='list-skeleton'
      sx={skeletonWrapperStyles}
    >
      {TOTAL_ROWS.map(index => (
        <MuiSkeleton key={index} component='li' animation='wave' height={40} />
      ))}
    </MuiBox>
  ),
);

ListSkeleton.displayName = 'FilterableList.ListSkeleton';
