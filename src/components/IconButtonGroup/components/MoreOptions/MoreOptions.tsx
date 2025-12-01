import type { JSX, MouseEvent } from 'react';
import { useId, useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MuiBox from '@mui/material/Box';
import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';

import { IconButton } from 'src/components';
import { useLocalization } from 'src/localization';

import type { MoreOptionsProps } from './MoreOptions.types';

export const MoreOptions = ({
  'data-testid': dataTestid = 'more-options-button',
  actions = [],
  orientation,
}: MoreOptionsProps): JSX.Element | null => {
  const btnId = useId();
  const menuId = useId();
  const l10n = useLocalization();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isVertical = orientation === 'column';

  const handleOpenMenu = (event?: MouseEvent<HTMLButtonElement>) => {
    if (event) {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!actions.length) return null;

  return (
    <MuiBox>
      <IconButton
        id={btnId}
        icon={isVertical ? MoreVertIcon : MoreHorizIcon}
        data-testid={dataTestid}
        label={l10n('components.iconButtonGroup.moreOptions')}
        aria-controls={open ? menuId : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpenMenu}
      />
      <MuiMenu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            'aria-labelledby': btnId,
          },
        }}
      >
        {actions.map(action => (
          <MuiMenuItem
            key={action.id}
            disabled={action.disabled}
            onClick={() => {
              handleClose();
              action.onClick();
            }}
          >
            {action.label}
          </MuiMenuItem>
        ))}
      </MuiMenu>
    </MuiBox>
  );
};
