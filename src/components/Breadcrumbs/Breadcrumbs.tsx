import type { JSX } from 'react';
import MuiIconHome from '@mui/icons-material/Home';
import MuiBox from '@mui/material/Box';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import MuiSkeleton from '@mui/material/Skeleton';
import MuiTypography from '@mui/material/Typography';

import {
  iconStyles,
  loaderStyles,
  stepStyles,
  textStyles,
} from './Breadcrumbs.styles';
import type { BreadcrumbsProps } from './Breadcrumbs.types';

export const Breadcrumbs = ({
  'data-testid': dataTestid,
  steps = [],
  sx,
  isLoading = false,
}: BreadcrumbsProps): JSX.Element => {
  if (isLoading) {
    return (
      <MuiBox component='div' role='status' sx={loaderStyles}>
        <MuiSkeleton variant='text' />
      </MuiBox>
    );
  }

  return (
    <MuiBreadcrumbs aria-label='breadcrumb' data-testid={dataTestid} sx={sx}>
      {steps
        .filter(element => element !== undefined)
        .map((step, index) => (
          <MuiBox component='span' key={step} sx={stepStyles}>
            {index === 0 && <MuiIconHome sx={iconStyles} />}
            <MuiTypography sx={textStyles}>{step}</MuiTypography>
          </MuiBox>
        ))}
    </MuiBreadcrumbs>
  );
};
