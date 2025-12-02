import { isString } from '@torian12321/js-utils/typeChecker';

import type { Message } from '../../../../FieldRenderer';
import type { FieldWithValue, FormFields } from '../../types';
import type { TextValidations } from './validateField.types';
import { addErrorMessage, getValidationProps } from './validateField.utils';

export const validateFieldText = (
  field: FieldWithValue,
  fields: FormFields = {},
): Message[] => {
  const errorMessages: Message[] = [];
  const addError = (m: string, mCustom?: string) =>
    errorMessages.push(addErrorMessage(m, mCustom));

  const { value, validations = {} } = field;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { min_length, max_length } = validations as TextValidations;

  const minValidation = getValidationProps(min_length, fields);
  const maxValidation = getValidationProps(max_length, fields);

  if (isString(value)) {
    if (minValidation.value && value.length < minValidation.value) {
      addError(`Min characters: ${minValidation.value}`, minValidation.message);
    }
    if (maxValidation.value && value.length > maxValidation.value) {
      addError(`Max characters: ${maxValidation.value}`, maxValidation.message);
    }
  }

  return errorMessages;
};
