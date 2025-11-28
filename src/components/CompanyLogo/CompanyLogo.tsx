import type { JSX } from 'react';
import MuiBox from '@mui/material/Box';

import {
  DEFAULT_LOGO_MODE_DARK,
  DEFAULT_LOGO_MODE_LIGHT,
  useGetIsDarkMode,
} from 'src/contexts/theme';
import { useCombineSxStyles } from 'src/utils';

import { getLogoStyles } from './CompanyLogo.styles';
import type { CompanyLogoProps } from './CompanyLogo.types';

export const CompanyLogo = ({
  sx,
  size = 'medium',
}: CompanyLogoProps): JSX.Element => {
  const isDarkMode = useGetIsDarkMode();
  const logoStyles = getLogoStyles(size);
  const sxStyles = useCombineSxStyles(logoStyles, sx);

  const srcImage = isDarkMode
    ? DEFAULT_LOGO_MODE_DARK
    : DEFAULT_LOGO_MODE_LIGHT;

  return <MuiBox component='img' alt='app-logo' src={srcImage} sx={sxStyles} />;
};
