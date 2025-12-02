import type { Message } from 'formRenderer/FieldRenderer';

import { capitaliseFirstLetter } from '@torian12321/js-utils/string';

import { localization } from 'src/localization';

import type { FieldWithValue } from '../../types';
import { addErrorMessage, getValidationProps } from './validateField.utils';

const isEmptyArray = (value: unknown): boolean =>
  Array.isArray(value) && !value.length;

const getMessageRequired = (field: FieldWithValue): string => {
  const { label, type } = field;
  const styledLabel = capitaliseFirstLetter(label);
  let messageText = localization(
    'components.formRenderer.errorMessages.makeSelection',
    {
      label: styledLabel,
    },
  );

  if (styledLabel.trim() !== '') {
    switch (type) {
      case 'dropdown':
      case 'options_list':
      case 'radio_button':
        messageText = localization(
          'components.formRenderer.errorMessages.selectValid',
          {
            label: styledLabel,
          },
        );
        break;
      case 'text':
      default:
        messageText = localization(
          'components.formRenderer.errorMessages.pleaseEnter',
          {
            label: styledLabel,
          },
        );
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
