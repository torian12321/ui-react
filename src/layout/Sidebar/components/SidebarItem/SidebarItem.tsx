import type { JSX } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { Tooltip } from 'src/components';
import { useGetAppLayoutState } from 'src/contexts/appStore';

import { MenuItem, MenuItemLogo } from './SidebarItem.styles';
import { SidebarItemProps } from './SidebarItem.types';

export const SidebarItem = ({
  label,
  icon,
  isActive = false,
  onClick,
}: SidebarItemProps): JSX.Element => {
  const { sidebarOpen } = useGetAppLayoutState();
  // Show tooltip only if the sidebar is closed
  const tooltipTitle = !sidebarOpen ? label : undefined;

  return (
    <Tooltip title={tooltipTitle} placement='right'>
      <ListItem disablePadding>
        <MenuItem onClick={onClick} isActive={isActive} data-testid={label}>
          <MenuItemLogo>{icon}</MenuItemLogo>
          <ListItemText primary={label} />
        </MenuItem>
      </ListItem>
    </Tooltip>
  );
};
