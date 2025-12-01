import type { ChangeEvent } from 'react';

import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

export type TextFieldProps<InputName extends string = string> =
  ComponentWithTestId &
    ComponentWithStyles & {
      name: InputName;
      value?: string;
      placeholder?: string;
      disabled?: boolean;
      onChange: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
      onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
      onPressEnter?: VoidFunction;
    };
