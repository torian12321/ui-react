import type { ReactElement } from 'react';

import type { ComponentWithTestId } from 'src/types';

export type ChipLabel = string | number | boolean;

export type ChipProps = ComponentWithTestId & {
  label: ChipLabel;
  color?: string;
  bgColor?: string;
  onDelete?: VoidFunction;
};

export type ChipListProps = ComponentWithTestId & {
  children: ReactElement<ChipProps> | ReactElement<ChipProps>[];
};
