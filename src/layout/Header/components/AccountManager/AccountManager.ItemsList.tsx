import type { JSX } from 'react';
import MuiBox from '@mui/material/Box';
import MuiDivider from '@mui/material/Divider';

import { AccountManagerItem } from './AccountManager.Item';
import type { AccountManagerItemsListProps } from './AccountManager.types';

/**
 * Group actions by group and render them in a list.
 * Logout action is always rendered at the end.
 */
export const ItemsList = ({
  actions = [],
  closeMenu,
}: AccountManagerItemsListProps): JSX.Element | null => {
  const handleClickAction = (action: VoidFunction) => {
    action();
    closeMenu();
  };

  return (
    <>
      {Object.entries(
        actions.reduce<Record<string, typeof actions>>((groups, action) => {
          const group = action.group ?? 'default';
          return { ...groups, [group]: [...(groups[group] || []), action] };
        }, {}),
      ).map(([group, groupActions], index, array) => (
        <MuiBox key={group}>
          {groupActions.map(action => (
            <AccountManagerItem
              key={action.label}
              label={action.label}
              icon={action.icon}
              onClick={() => handleClickAction(action.onClick)}
            />
          ))}
          {index < array.length - 1 && <MuiDivider />}
        </MuiBox>
      ))}
      {!!actions.length && <MuiDivider />}
    </>
  );
};
