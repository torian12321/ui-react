import { isNumber } from '@torian12321/js-utils/typeChecker';

import type { Message } from '../../../../FieldRenderer';
import type { FieldWithValue, FormFields } from '../../types';
import type { MumericalValidations } from './validateField.types';
import { addErrorMessage, getValidationProps } from './validateField.utils';

export const validateFieldNumber = (
  field: FieldWithValue,
  fields: FormFields = {},
): Message[] => {
  const errorMessages: Message[] = [];
  const addError = (m: string, mCustom?: string) =>
    errorMessages.push(addErrorMessage(m, mCustom));

  const { value, validations = {} } = field;
  const { min, max } = validations as MumericalValidations;

  const minValidation = getValidationProps(min, fields);
  const maxValidation = getValidationProps(max, fields);

  if (isNumber(value)) {
    if (minValidation.value && value < minValidation.value) {
      addError(
        `Please enter a number bigger than ${minValidation.value}`,
        minValidation.message,
      );
    }
    if (maxValidation.value && value > maxValidation.value) {
      addError(
        `Please enter a number smaller than ${maxValidation.value}`,
        maxValidation.message,
      );
    }
  }

  return errorMessages;
};
