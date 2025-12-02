import type { ComponentWithTestId } from 'src/types';

export type Options<T = string> = {
  label: string;
  value: T;
};

export type OptionsSelectorProps<T = string> = ComponentWithTestId & {
  menuId?: string;
  show?: boolean;
  options?: Options<T>[];
  value?: T | null;
  label?: string;
  onChange?: (value: T) => void;
};
