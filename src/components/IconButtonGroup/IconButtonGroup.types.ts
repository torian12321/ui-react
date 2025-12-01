import type { IconButtonProps } from 'src/components';
import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

export type IconButtonAction = IconButtonProps & {
  show?: boolean;
  inMenu?: boolean;
};

export type Orientation = 'row' | 'column';
export type IconButtonGroupProps = ComponentWithTestId &
  ComponentWithStyles & {
    actions: IconButtonAction[];
    /** disable ALL actions */
    disabled?: boolean;
    orientation?: Orientation;
    /** max number of actions to display, additional actions will be included in a menu */
    maxDisplayedActions?: number;
  };
