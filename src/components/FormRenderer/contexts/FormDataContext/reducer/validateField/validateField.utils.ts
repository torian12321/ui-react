import type { Message } from 'formRenderer/FieldRenderer';

import type { FormFields } from '../../types';
import type { Validation, ValidationObj } from './validateField.types';

export const addErrorMessage = (
  message: string,
  /** User specific message is used to replace the default message */
  userMessage?: string,
): Message => ({
  message: userMessage ?? message,
  severity: 'error',
});

// Type Guard to know validation is the correct type
const isValidationObject = <T>(
  validation: Validation<T>,
): validation is ValidationObj<T> => typeof validation === 'object';

export const getValidationProps = <T>(
  validation: Validation<T> = {},
  fields: FormFields = {},
): ValidationObj<T> => {
  if (isValidationObject(validation)) {
    // Try to find if there is another field with the given name
    const { ref = '' } = validation;
    const { value: refValue } = fields[ref] || {};

    return {
      value: (refValue ?? validation?.value) as T,
      message: validation?.message,
    };
  }

  return {
    value: validation,
    message: undefined,
  };
};
