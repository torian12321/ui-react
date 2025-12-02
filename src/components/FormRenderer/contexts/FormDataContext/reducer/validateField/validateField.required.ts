import { capitaliseFirstLetter } from '@torian12321/js-utils/string';

import type { Message } from '../../../../FieldRenderer';
import type { FieldWithValue } from '../../types';
import { addErrorMessage, getValidationProps } from './validateField.utils';

const isEmptyArray = (value: unknown): boolean =>
  Array.isArray(value) && !value.length;

const getMessageRequired = (field: FieldWithValue): string => {
  const { label, type } = field;
  const styledLabel = capitaliseFirstLetter(label);
  let messageText = 'Please make a selection';

  if (styledLabel.trim() !== '') {
    switch (type) {
      case 'dropdown':
      case 'options_list':
      case 'radio_button':
        messageText = `Select a Valid ${styledLabel}`;
        break;
      case 'text':
      default:
        messageText = `Please Enter ${styledLabel}`;
        break;
    }
  } else if (type === 'file_upload') {
    messageText = 'Select a valid File';
  }

  return messageText;
};

export const validateFieldRequired = (field: FieldWithValue): Message[] => {
  const errorMessages: Message[] = [];
  const addError = (m: string, mCustom?: string) =>
    errorMessages.push(addErrorMessage(m, mCustom));

  const { value, validations = {} } = field;
  const { required = false } = validations;

  const reqValidation = getValidationProps(required);

  if (reqValidation.value && (!value || isEmptyArray(value))) {
    addError(getMessageRequired(field), reqValidation.message);
  }

  return errorMessages;
};
