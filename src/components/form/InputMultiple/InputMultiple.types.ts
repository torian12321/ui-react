import type { TextFieldProps } from 'src/components';
import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

type InputBase<InputName extends string = string> = Omit<
  TextFieldProps<InputName>,
  'onChange' | 'value'
>;

export type InputMultipleProps<InputName extends string = string> =
  ComponentWithStyles &
    ComponentWithTestId & {
      inputs: InputBase<InputName>[];
      value: Record<InputName, string>;
      label?: string;
      disabled?: boolean;
      onChange?: (record: Record<InputName, string>) => void;
      onKeyDown?: (
        e: React.KeyboardEvent<HTMLInputElement>,
        fieldName: InputName,
      ) => void;
    };
