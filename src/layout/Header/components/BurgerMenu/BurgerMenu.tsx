import type { JSX } from 'react';
import MuiMenuIcon from '@mui/icons-material/Menu';
import MuiIconButton from '@mui/material/IconButton';

import { BurgerMenuProps } from './BurgerMenu.types';

export const BurgerMenu = ({ onClick }: BurgerMenuProps): JSX.Element | null =>
  onClick ? (
    <MuiIconButton
      color='inherit'
      aria-label='Toggle left pane'
      aria-controls='app-sideBar'
      data-testid='app-sideBar-switcher'
      onClick={onClick}
      edge='start'
    >
      <MuiMenuIcon />
    </MuiIconButton>
  ) : null;
