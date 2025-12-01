import type { ChangeEvent } from 'react';

import type {
  ComponentWithStyles,
  ComponentWithTestId,
  MuiStyles,
} from 'src/types';

export type SwitchProps = ComponentWithTestId &
  ComponentWithStyles & {
    /** The style object for the toggle */
    sxToggle?: MuiStyles;
    name?: string;
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void;
  };

export type SwitchToggleProps = ComponentWithTestId &
  ComponentWithStyles & {
    inputId?: string;
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void;
  };
