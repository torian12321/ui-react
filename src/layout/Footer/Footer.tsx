import type { JSX, PropsWithChildren } from 'react';
import MuiBox from '@mui/material/Box';

import { footerStyles } from './Footer.styles';
import type { FooterProps } from './Footer.types';

export const Footer = ({
  children,
  'data-testid': dataTestid = 'layout-footer',
  title,
}: PropsWithChildren<FooterProps>): JSX.Element => (
  <MuiBox
    data-testid={dataTestid}
    title={title}
    sx={footerStyles}
    component='footer'
  >
    {children}
  </MuiBox>
);
