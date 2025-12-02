import type { ComponentWithTestId } from 'src/types';

export type DatePickerProps = ComponentWithTestId & {
  name?: string;
  label?: string;
  value?: string | Date | undefined;

  dateFormat?: string;
  dateTimeFormat?: string;

  isDateTimePicker?: boolean;
  required?: boolean;
  isTouched?: boolean;
  hasError?: boolean;
  disabled?: boolean;
  onChange?: (date: Date | null) => void;
};
