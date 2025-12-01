import type { IconButtonProps } from 'src/components';
import type { ComponentWithTestId } from 'src/types';

import type { Orientation } from '../../IconButtonGroup.types';

export type MoreOptionsProps = ComponentWithTestId & {
  actions: IconButtonProps[];
  disabled?: boolean;
  orientation?: Orientation;
};
