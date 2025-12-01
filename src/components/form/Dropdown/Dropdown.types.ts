import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

export type OptionValue = string | number;
export type Option<V extends OptionValue = OptionValue> = {
  value: V;
  label?: string;
  disabled?: boolean;
  show?: boolean;
};

export type DropdownProps<V extends OptionValue = OptionValue> =
  ComponentWithTestId &
    ComponentWithStyles & {
      name?: string;
      label?: string;
      value?: V | null;
      loading?: boolean;
      disabled?: boolean;
      placeholder?: string;
      error?: boolean;
      /** if true, clearable is disabled */
      required?: boolean;
      options?: Option<V>[];
      onChange?: (value: V | null) => void;
      onBlur?: VoidFunction;
    };
