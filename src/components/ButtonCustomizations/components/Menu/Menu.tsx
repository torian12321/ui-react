import type { JSX } from 'react';
import MuiMenu from '@mui/material/Menu';

import { MENU_ID, SELECTOR_BUTTON_ID } from '../../constants';
import { menuStyles } from './Menu.styles';
import type { MenuProps } from './Menu.types';

export const Menu = ({
  children,
  anchorEl,
  open,
  onClose,
}: MenuProps): JSX.Element | null => (
  <MuiMenu
    id={MENU_ID}
    anchorEl={anchorEl}
    open={open}
    sx={menuStyles}
    slotProps={{
      list: {
        'aria-labelledby': SELECTOR_BUTTON_ID,
      },
    }}
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    onClose={onClose}
  >
    {children}
  </MuiMenu>
);
