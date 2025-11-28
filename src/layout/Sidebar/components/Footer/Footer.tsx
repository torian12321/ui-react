import type { JSX } from 'react';
import MuiBox from '@mui/material/Box';

import { Tooltip } from 'src/components';

import { useSideBarContext } from '../../SideBarContext';
import { footerStyles } from './SidebarFooter.styles';
import { SidebarFooterProps } from './SidebarFooter.types';

export const SidebarFooter = ({
  appVersion,
}: SidebarFooterProps): JSX.Element | null => {
  const { isOpen } = useSideBarContext();
  const versionText = `Version: ${appVersion}`;
  const versionLabel = isOpen ? versionText : 'V';

  // Show tooltip only if the sidebar is closed
  const tooltipTitle = !isOpen ? versionText : undefined;

  if (!appVersion) {
    return null;
  }

  return (
    <Tooltip title={tooltipTitle} placement='right'>
      <MuiBox sx={footerStyles}>{versionLabel}</MuiBox>
    </Tooltip>
  );
};
