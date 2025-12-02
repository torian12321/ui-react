import type { TextFieldProps } from '@mui/material/TextField';

export type SharedTextFieldProps = Omit<TextFieldProps, 'onChange'> & {
  rows?: number;
  loading?: boolean;
  onChange?: (value: string) => void;
};
