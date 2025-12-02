import type { TextFieldProps } from '@mui/material/TextField';

/**
 * SharedTextField is a text field used in multiple components,
 * The sared props will help to keep consistent styles on formFields
 *
 * It is used on:
 *  - DateField (commonTextFieldProps only)
 *  - DateTimeField (commonTextFieldProps only)
 *  - LongTextField
 *  - NumericField
 *  - SelectField
 *  - TextField
 */

export const commonTextFieldProps: TextFieldProps = {
  size: 'small',
  variant: 'outlined',
  type: 'text',
  fullWidth: true,
  rows: 1,
  multiline: false,
};
