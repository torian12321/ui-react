import type { ComponentWithStyles } from 'src/types';

export type ItemId = string | number;

export type ListItemProps = ComponentWithStyles & {
  id: ItemId;
  title?: string;
  isActive?: boolean;
  onClick?: VoidFunction;
};
