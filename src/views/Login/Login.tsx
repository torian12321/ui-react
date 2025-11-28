import type { JSX } from 'react';
import MuiBox from '@mui/material/Box';

import { Header } from 'src/layout';

import { contentStyles, wrapperStyles } from './Login.styles';
import type { LoginProps } from './Login.types';
import { LoginCard } from './LoginCard';

export const Login = ({
  appName,
  btnText = 'Login',
  disabled = false,
  btnOnClick,
}: LoginProps): JSX.Element => (
  <MuiBox sx={wrapperStyles}>
    <Header title={appName} />
    <MuiBox sx={contentStyles}>
      <LoginCard
        btnText={btnText}
        btnOnClick={btnOnClick}
        disabled={disabled}
      />
    </MuiBox>
  </MuiBox>
);
