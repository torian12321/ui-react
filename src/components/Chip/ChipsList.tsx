import { Children } from 'react';
import MuiBox from '@mui/material/Box';

import { listItemStyles, listStyles } from './Chip.styles';
import type { ChipListProps } from './Chip.types';

export const ChipsList = ({
  children,
  'data-testid': dataTestid,
}: ChipListProps) => (
  <MuiBox component='ul' data-testid={dataTestid} sx={listStyles}>
    {Children.map(children, child => (
      <MuiBox component='li' sx={listItemStyles}>
        {child}
      </MuiBox>
    ))}
  </MuiBox>
);
