import type { JSX } from 'react';
import { useState } from 'react';
import MuiStack from '@mui/material/Stack';
import type { DateTimeValidationError } from '@mui/x-date-pickers';
import { AdapterDayjs as MuiAdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker as MuiDesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DesktopDateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import {
  getDateFormat,
  getDateTimeFormat,
  isDateValid,
} from '@torian12321/js-utils/date';

import { SPELL_CHECK_LANGUAGE } from 'src/constants';
import { useLocalization } from 'src/localization';

import type { DatePickerProps } from './DatePicker.types';

export const DatePicker = ({
  'data-testid': dataTestid,
  name,
  label,
  value,
  dateFormat = getDateFormat(),
  dateTimeFormat = getDateTimeFormat(),
  isDateTimePicker = false,
  required = false,
  disabled = false,
  isTouched = false,
  hasError = false,
  onChange,
}: DatePickerProps): JSX.Element => {
  const l10n = useLocalization();

  const [error, setError] = useState<string>('');
  const fieldValue = value ? dayjs(value) : null;

  const handleOnChange = (newValue: Dayjs | null) => {
    if (newValue && onChange) {
      onChange(newValue.toDate());

      if (!isDateValid(newValue.toString())) {
        setError(l10n('components.datePicker.errorMessages.invalidDate'));
      }
    }

    if (required && !newValue) {
      setError(
        l10n('components.datePicker.errorMessages.isRequired', { label }),
      );
    }
  };

  const handleOnError = (
    reason: DateTimeValidationError,
    errorValue: Dayjs | null,
  ) => {
    const errorMessage = reason ? `${errorValue}` : '';
    setError(errorMessage);
  };

  const getSlotPropTextField = {
    helperText: isTouched && hasError && error,
    size: 'small' as const,
    name,
    required,
    error: isTouched && hasError,
  };

  return (
    <MuiLocalizationProvider
      dateAdapter={MuiAdapterDayjs}
      adapterLocale={SPELL_CHECK_LANGUAGE}
    >
      <MuiStack spacing={3} data-testid={dataTestid}>
        {isDateTimePicker ? (
          <MuiDateTimePicker
            data-testid='date-time-picker'
            ampm
            ampmInClock
            format={dateTimeFormat}
            label={label}
            disabled={disabled}
            value={fieldValue}
            onChange={handleOnChange}
            onError={handleOnError}
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: null,
            }}
            slotProps={{
              field: { clearable: true },
              textField: getSlotPropTextField,
              actionBar: {
                actions: ['today'],
              },
            }}
          />
        ) : (
          <MuiDesktopDatePicker
            data-testid='date-picker'
            format={dateFormat}
            label={label}
            disabled={disabled}
            value={fieldValue}
            onChange={handleOnChange}
            onError={handleOnError}
            slotProps={{
              field: { clearable: true },
              textField: getSlotPropTextField,
              actionBar: {
                actions: ['today'],
              },
            }}
          />
        )}
      </MuiStack>
    </MuiLocalizationProvider>
  );
};
