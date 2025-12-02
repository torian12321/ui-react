import type { JSX } from 'react';
import MuiBox from '@mui/material/Box';

import { Tooltip } from 'src/components';
import { useGetAppLayoutState } from 'src/contexts/appStore';

import { footerStyles } from './SidebarFooter.styles';
import { SidebarFooterProps } from './SidebarFooter.types';

export const SidebarFooter = ({
  appVersion,
}: SidebarFooterProps): JSX.Element | null => {
  const { sidebarOpen } = useGetAppLayoutState();
  const versionText = `Version: ${appVersion}`;
  const versionLabel = sidebarOpen ? versionText : 'V';

  // Show tooltip only if the sidebar is closed
  const tooltipTitle = !sidebarOpen ? versionText : undefined;

  if (!appVersion) {
    return null;
  }

  return (
    <Tooltip title={tooltipTitle} placement='right'>
      <MuiBox sx={footerStyles}>{versionLabel}</MuiBox>
    </Tooltip>
  );
};
