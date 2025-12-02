import type { RefObject } from 'react';

import type { Option } from '../../ButtonCustomizations.types';

export type FieldError = string;

export type DialogCreateProps = {
  open?: boolean;
  loading?: boolean;
  options: Option[];
  minNameLength?: number;
  maxNameLength?: number;
  onClose: VoidFunction;
  onSubmit: (label: string) => Promise<boolean>;
};

export type FieldProps = {
  value: string;
  errors?: FieldError[];
  fieldRef?: RefObject<HTMLInputElement>;
  disabled?: boolean;
  onChange: (value: string) => void;
  onSubmit: VoidFunction;
};

export type UseCalculateErrorsArguments = {
  options: Option[];
  minNameLength?: number;
  maxNameLength?: number;
};
