import {
  getCurrentDate,
  isDateAfter,
  isDateBefore,
  isDateValid,
} from '@torian12321/js-utils';

import { TODAY } from '../../../../constants';
import type { Message } from '../../../../FieldRenderer';
import type { FieldWithValue, FormFields } from '../../types';
import type { DateValidations } from './validateField.types';
import { addErrorMessage, getValidationProps } from './validateField.utils';

export const validateFieldDateTime = (
  field: FieldWithValue,
  fields: FormFields = {},
): Message[] => {
  const errorMessages: Message[] = [];
  const addError = (m: string, mCustom?: string) =>
    errorMessages.push(addErrorMessage(m, mCustom));

  const { value, validations = {} } = field;

  if (value) {
    if (!isDateValid(value as string)) {
      addError('Invalid date');
    } else {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { min_date, max_date } = validations as DateValidations;
      const minValidation = getValidationProps(min_date, fields);
      const maxValidation = getValidationProps(max_date, fields);

      if (
        minValidation.value &&
        isDateValid(minValidation.value) &&
        isDateBefore(value as string, minValidation.value)
      ) {
        addError(
          `Please select a date posterior to ${minValidation.value}`,
          minValidation.message,
        );
      }
      if (
        maxValidation.value &&
        isDateValid(maxValidation.value) &&
        isDateAfter(value as string, maxValidation.value)
      ) {
        addError(
          `Please select a date previous to ${maxValidation.value}`,
          maxValidation.message,
        );
      }

      // Compare dates with 'today' date
      if ([minValidation.value, maxValidation.value].includes(TODAY)) {
        const todayDate = getCurrentDate();
        if (
          minValidation.value === TODAY &&
          isDateBefore(value as string, todayDate)
        ) {
          addError('Please select a date posterior to today`s date');
        }
        if (
          maxValidation.value === TODAY &&
          isDateAfter(value as string, todayDate)
        ) {
          addError('Please select a date previous to today`s date');
        }
      }
    }
  }

  return errorMessages;
};
