import type { SvgIconComponent } from '@mui/icons-material';

import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

type Action = {
  label: string;
  /** Icon from "@mui/icons-material" */
  icon?: SvgIconComponent;
  group?: string;
  onClick: VoidFunction;
};

export type AccountManagerItemProps = Omit<Action, 'group'>;

export type AccountManagerItemsListProps = {
  actions: Action[];
  closeMenu: VoidFunction;
};

export type AccountManagerProps = ComponentWithStyles &
  ComponentWithTestId & {
    userName?: string;
    show?: boolean;
    /** Additional actions to display in the menu */
    actions?: Action[];
    onLogout: VoidFunction;
  };
