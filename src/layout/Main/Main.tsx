import type { JSX, PropsWithChildren } from 'react';
import MuiBox from '@mui/material/Box';

import { LoadingBar } from 'src/components';

import { wrapperStyles } from './Main.styles';
import { MainProps } from './Main.types';

export const Main = ({
  children,
  'data-testid': dataTestid = 'app-main',
  loading = false,
}: PropsWithChildren<MainProps>): JSX.Element => (
  <MuiBox component='main' data-testid={dataTestid} sx={wrapperStyles}>
    {loading ? <LoadingBar /> : children}
  </MuiBox>
);
