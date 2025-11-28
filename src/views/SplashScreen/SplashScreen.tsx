import MuiBox from '@mui/material/Box';

import { CompanyLogo, LoadingBar } from 'src/components';

import {
  containerStyle,
  logoStyles,
  progressBarContainer,
} from './SplashScreen.styles';

export const SplashScreen = () => (
  <MuiBox sx={containerStyle} data-testid='splash-screen-container'>
    <CompanyLogo sx={logoStyles} />
    <MuiBox sx={progressBarContainer} data-testid='splash-screen-progress'>
      <LoadingBar />
    </MuiBox>
  </MuiBox>
);
