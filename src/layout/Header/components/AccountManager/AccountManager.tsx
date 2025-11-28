import type { JSX, MouseEvent } from 'react';
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import MuiAvatar from '@mui/material/Avatar';
import MuiBox from '@mui/material/Box';
import MuiIconButton from '@mui/material/IconButton';
import MuiMenu from '@mui/material/Menu';

import { Tooltip } from 'src/components';
import { useLocalization } from 'src/localization';

import { AccountManagerItem } from './AccountManager.Item';
import { ItemsList } from './AccountManager.ItemsList';
import {
  accountLabelStyles,
  avatarStyles,
  wrapperStyles,
} from './AccountManager.styles';
import type { AccountManagerProps } from './AccountManager.types';
import { getAvatarText } from './getAvatarText';

export const AccountManager = ({
  'data-testid': dataTestid = 'account-manager',
  userName = '',
  show = true,
  actions = [],
  onLogout,
}: AccountManagerProps): JSX.Element | null => {
  const l10n = useLocalization();
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  const avatarText = getAvatarText(userName);

  const menuOpenHandler = (event: MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };

  const menuCloseHandler = () => {
    setAnchor(null);
  };

  const handleClickAction = (action: VoidFunction) => {
    action();
    menuCloseHandler();
  };

  if (!show) return null;

  return (
    <MuiBox data-testid={dataTestid} sx={wrapperStyles}>
      <MuiBox sx={accountLabelStyles}>{userName}</MuiBox>

      <Tooltip title={l10n('layout.accountManager.btnTitle')}>
        <MuiIconButton
          data-testid={`${dataTestid}-btn`}
          color='inherit'
          onClick={menuOpenHandler}
        >
          <MuiAvatar sx={avatarStyles}>{avatarText}</MuiAvatar>
        </MuiIconButton>
      </Tooltip>

      <MuiMenu anchorEl={anchor} open={!!anchor} onClose={menuCloseHandler}>
        <ItemsList actions={actions} closeMenu={menuCloseHandler} />

        <AccountManagerItem
          label={l10n('layout.accountManager.logout')}
          icon={LogoutIcon}
          onClick={() => handleClickAction(onLogout)}
        />
      </MuiMenu>
    </MuiBox>
  );
};
