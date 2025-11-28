import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

export type DropdownProps = ComponentWithTestId &
  ComponentWithStyles & {
    label?: string;
    value?: string;
    options: {
      label: string;
      value: string;
    }[];
    isLoading?: boolean;
    onChange: (value: string) => void;
  };
