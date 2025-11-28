import type { JSX } from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';
import MuiMenuItem from '@mui/material/MenuItem';

import { menuItemStyles } from './AccountManager.styles';
import type { AccountManagerItemProps } from './AccountManager.types';

export const AccountManagerItem = ({
  label,
  icon,
  onClick,
}: AccountManagerItemProps): JSX.Element | null => {
  const IconComponent = icon;

  return (
    <MuiMenuItem onClick={onClick} sx={menuItemStyles}>
      {!!IconComponent && (
        <ListItemIcon>
          <IconComponent fontSize='small' />
        </ListItemIcon>
      )}
      <ListItemText>{label}</ListItemText>
    </MuiMenuItem>
  );
};
