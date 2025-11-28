import type { JSX, PropsWithChildren } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import MuiBox from '@mui/material/Box';
import MuiToolbar from '@mui/material/Toolbar';
import MuiTypography from '@mui/material/Typography';

import { CompanyLogo } from 'src/components';

import { BurgerMenu } from './components';
import {
  contentStyles,
  logoStyles,
  titleStyles,
  toolBarStyles,
  wrapperStyles,
} from './Header.styles';
import { HeaderProps } from './Header.types';

export const Header = ({
  children,
  'data-testid': dataTestid = 'app-header',
  title,
  onClickMenuOpener,
}: PropsWithChildren<HeaderProps>): JSX.Element => (
  <MuiAppBar
    sx={wrapperStyles}
    data-testid={dataTestid}
    aria-label='app header'
  >
    <MuiToolbar sx={toolBarStyles}>
      <BurgerMenu onClick={onClickMenuOpener} />
      <CompanyLogo sx={logoStyles} />
      <MuiTypography component='h6' sx={titleStyles}>
        {title}
      </MuiTypography>
      <MuiBox sx={contentStyles}>{children}</MuiBox>
    </MuiToolbar>
  </MuiAppBar>
);
