import type { ReactNode } from 'react';

export type SidebarItemProps = {
  label: string;
  icon?: ReactNode;
  isActive?: boolean;
  onClick?: VoidFunction;
};
