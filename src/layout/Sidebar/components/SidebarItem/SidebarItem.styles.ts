import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled } from '@mui/material/styles';

import type { SidebarItemProps } from './SidebarItem.types';

export const MenuList = styled(List)({
  padding: 0,
  flexGrow: 1,
});

export const MenuItem = styled(ListItemButton, {
  shouldForwardProp: prop => prop !== 'isActive',
})<Pick<SidebarItemProps, 'isActive'>>(({ theme, isActive }) => ({
  color: theme.palette.primary.contrastText,
  border: 'solid transparent 0',
  textTransform: 'capitalize',

  position: 'relative',
  '&:before ': {
    // Active indicator line
    content: '""',
    position: 'absolute',
    left: '0',
    bottom: '0',
    top: '0',
    width: '3px',
    background: theme.palette.secondary.main,

    opacity: isActive ? 1 : 0,
    transition: 'opacity .2s',
  },
}));

export const MenuItemLogo = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  minWidth: 'unset',
  width: '36px',
  marginRight: theme.spacing(1),

  '& > svg': {
    fontSize: '24px',
  },
}));
