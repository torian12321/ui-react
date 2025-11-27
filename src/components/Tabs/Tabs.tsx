import type { PropsWithChildren, SyntheticEvent } from 'react';
import { Children } from 'react';
import Box from '@mui/material/Box';
import MuiTab from '@mui/material/Tab';
import MuiTabs from '@mui/material/Tabs';

import { TabPanel } from './TabPanel';
import {
  headerWrapperStyles,
  tabsLabelStyles,
  tabsStyles,
  wrapperStyles,
} from './Tabs.styles';
import type { TabsProps } from './Tabs.types';
import { getActiveTabIndex, getTabDetails } from './utils';

export const Tabs = <T,>({
  children,
  id: tabsId = 'tabs-group',
  activeTab,
  labels = [],
  sxContent,
  onChange,
}: PropsWithChildren<TabsProps<T>>) => {
  const tabsLabelDetails = getTabDetails(labels);
  const activeTabIndex = getActiveTabIndex(tabsLabelDetails, activeTab);

  const handleChange = (_e: SyntheticEvent, newValue: T) => {
    onChange(newValue);
  };

  return (
    <Box sx={wrapperStyles} id={tabsId}>
      <Box sx={headerWrapperStyles}>
        <MuiTabs
          value={tabsLabelDetails[activeTabIndex]?.id}
          onChange={handleChange}
          sx={tabsStyles}
        >
          {tabsLabelDetails.map((tabLabel, index) => (
            <MuiTab
              key={tabLabel.id}
              id={`${tabsId}-tab-${index}`}
              value={tabLabel.id}
              disabled={tabLabel.disabled}
              label={tabLabel.label}
              sx={tabsLabelStyles}
              iconPosition='start'
              aria-label={tabLabel.label}
              aria-controls={`${tabsId}-tabpanel-${index}`}
            />
          ))}
        </MuiTabs>
      </Box>

      {Children.map(children, (child, index) => (
        <TabPanel
          key={index}
          tabsId={tabsId}
          index={index}
          sx={sxContent}
          hidden={activeTabIndex !== index}
        >
          {child}
        </TabPanel>
      ))}
    </Box>
  );
};
