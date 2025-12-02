import { TODAY } from 'formRenderer/constants';
import type { Message } from 'formRenderer/FieldRenderer';

import {
  getCurrentDate,
  isDateAfter,
  isDateBefore,
  isDateValid,
} from '@torian12321/js-utils';

import { localization } from 'src/localization';

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
      addError(
        localization('components.formRenderer.errorMessages.invalidDate'),
      );
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
          localization('components.formRenderer.errorMessages.minDate', {
            min: minValidation.value,
          }),
          minValidation.message,
        );
      }
      if (
        maxValidation.value &&
        isDateValid(maxValidation.value) &&
        isDateAfter(value as string, maxValidation.value)
      ) {
        addError(
          localization('components.formRenderer.errorMessages.maxDate', {
            max: maxValidation.value,
          }),
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
          addError(
            localization('components.formRenderer.errorMessages.minDateToday'),
          );
        }
        if (
          maxValidation.value === TODAY &&
          isDateAfter(value as string, todayDate)
        ) {
          addError(
            localization('components.formRenderer.errorMessages.maxDateToday'),
          );
        }
      }
    }
  }

  return errorMessages;
};
