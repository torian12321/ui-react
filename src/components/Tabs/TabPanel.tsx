import type { JSX, PropsWithChildren } from 'react';
import MuiBox from '@mui/material/Box';

import { combineSxStyles } from 'src/utils';

import { tabPanelStyles, tabPanelWrapperStyles } from './Tabs.styles';
import { TabPanelProps } from './Tabs.types';

export const TabPanel = ({
  children,
  tabsId,
  hidden = false,
  index,
  sx,
}: PropsWithChildren<TabPanelProps>): JSX.Element => (
  <MuiBox
    sx={tabPanelWrapperStyles}
    role='tabpanel'
    hidden={hidden}
    id={`${tabsId}-tabpanel-${index}`}
    aria-labelledby={`${tabsId}-tab-${index}`}
  >
    {!hidden && (
      <MuiBox sx={combineSxStyles(tabPanelStyles, sx)}>{children}</MuiBox>
    )}
  </MuiBox>
);
