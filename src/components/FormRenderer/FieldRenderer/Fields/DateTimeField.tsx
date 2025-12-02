import type { JSX } from 'react';
import type { TextFieldProps } from '@mui/material/TextField';
import type { PickersActionBarAction } from '@mui/x-date-pickers';
import { AdapterDayjs as MuiAdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import dayjs from 'dayjs';

import { getDateTimeFormat } from '@torian12321/js-utils/date';

import { FIELD_TYPE } from '../../FormRenderer.constants';
import type { FieldProps } from './Fields.types';
import { getSlotPropsTextField } from './Fields.utils';

export const DateTimeField = ({
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
  if (type !== FIELD_TYPE.DATE_TIME) return null;

  const format = getDateTimeFormat();

  const fieldValue = value ? dayjs(value) : null;
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
      <MuiDateTimePicker
        ampm
        ampmInClock
        format={format}
        label={label}
        value={fieldValue}
        disabled={disabled}
        onChange={handleOnChange}
        onAccept={onBlur}
        viewRenderers={{
          hours: renderTimeViewClock,
          minutes: renderTimeViewClock,
          seconds: null,
        }}
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
