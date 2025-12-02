import type { JSX } from 'react';
import type { TextFieldProps } from '@mui/material/TextField';
import type { PickersActionBarAction } from '@mui/x-date-pickers';
import { AdapterDayjs as MuiAdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker as MuiDesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

import { getDateFormat } from '@torian12321/js-utils/date';

import { FIELD_TYPE } from 'src/components/FormRenderer/constants';

import type { FieldProps } from './Fields.types';
import { getSlotPropsTextField } from './Fields.utils';

export const DateField = ({
  type,
  label,
  name,
  value,
  error,
  disabled = false,
  required = false,
  onChange,
  onBlur,
}: FieldProps): JSX.Element | null => {
  if (type !== FIELD_TYPE.DATE) return null;

  const fieldValue = value ? dayjs(value) : null;
  const format = getDateFormat();

  const actionBarButtons: PickersActionBarAction[] = required
    ? ['today']
    : ['clear', 'today'];

  const handleOnChange = (newValue: dayjs.Dayjs | null) => {
    if (!newValue) {
      onChange(null);
    } else {
      onChange(newValue.toDate());
    }
  };

  return (
    <MuiLocalizationProvider dateAdapter={MuiAdapterDayjs} adapterLocale='en'>
      <MuiDesktopDatePicker
        format={format}
        label={label}
        value={fieldValue}
        disabled={disabled}
        onChange={handleOnChange}
        onAccept={onBlur}
        slotProps={{
          actionBar: {
            actions: actionBarButtons,
          },
          textField: (params: TextFieldProps) => ({
            ...getSlotPropsTextField(params),
            error,
            name,
            id: name,
            onBlur,
          }),
        }}
      />
    </MuiLocalizationProvider>
  );
};
