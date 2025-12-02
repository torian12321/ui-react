import type { Message } from 'formRenderer/FieldRenderer';

import { isNumber } from '@torian12321/js-utils/typeChecker';

import { localization } from 'src/localization';

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
        localization('components.formRenderer.errorMessages.minNumber', {
          min: minValidation.value,
        }),
      );
    }
    if (maxValidation.value && value > maxValidation.value) {
      addError(
        localization('components.formRenderer.errorMessages.maxNumber', {
          max: maxValidation.value,
        }),
        maxValidation.message,
      );
    }
  }

  return errorMessages;
};
