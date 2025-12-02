import type { ComponentWithTestId } from 'src/types';

export type ListType =
  /** Left panel */
  | 'available'
  /** Right panel */
  | 'selected';

export type ListProps = ComponentWithTestId & {
  type?: ListType;
  label?: string;

  searchable?: boolean;
  draggable?: boolean;
};
