import type { RefObject } from 'react';

import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

export type ButtonCreateFilterProps = ComponentWithTestId &
  ComponentWithStyles & {
    tooltip?: string;
    errors?: string[];
    disabled?: boolean;
    loading?: boolean;
    maxFilterNameLenght?: number;
    /**
     * Call a Promise and return a boolean:
     *
     * - If returned value is `true`, the text field will reset and closed.
     * - If returned value is `false`, it is considerer as an error and the text field will not reset and closed.
     */
    onSubmit: (filterName: string) => Promise<boolean>;
  };

export type ButtonProps = {
  tooltipText?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick: VoidFunction;
};

export type FieldProps = {
  value: string;
  errors?: string[];
  inputRef?: RefObject<HTMLInputElement>;
  isLoading?: boolean;
  onChange: (value: string) => void;
  onSave: VoidFunction;
};

export type ButtonSaveProps = {
  disabled?: boolean;
  onClick: VoidFunction;
};
