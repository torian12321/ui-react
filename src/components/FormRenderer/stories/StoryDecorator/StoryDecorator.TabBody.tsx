import type { PropsWithChildren } from 'react';
import MuiBox from '@mui/material/Box';

import { tabBodyStyles } from './StoryDecorator.styles';

export const TabBody = ({ children }: PropsWithChildren) => (
  <MuiBox sx={tabBodyStyles}>{children}</MuiBox>
);
