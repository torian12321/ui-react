import type { JSX } from 'react';
import MuiBox from '@mui/material/Box';

import { useCombineSxStyles } from 'src/utils';

import { getLogoStyles } from './CompanyLogo.styles';
import type { CompanyLogoProps } from './CompanyLogo.types';
import { useGetSrcLogo } from './useGetSrcLogo';

export const CompanyLogo = ({
  sx,
  size = 'medium',
}: CompanyLogoProps): JSX.Element => {
  const srcImage = useGetSrcLogo();
  const logoStyles = getLogoStyles(size);
  const sxStyles = useCombineSxStyles(logoStyles, sx);

  return <MuiBox component='img' alt='app-logo' src={srcImage} sx={sxStyles} />;
};
