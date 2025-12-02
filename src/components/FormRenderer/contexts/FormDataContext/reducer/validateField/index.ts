import type { Message } from 'formRenderer/FieldRenderer';
import type { InfoMessageProps } from 'formRenderer/FormRenderer.types';

import type { FieldWithValue, FormFields } from '../../types';
import { validateFieldDateTime } from './validateField.dateTime';
import { validateInfoMessage } from './validateField.infoMessage';
import { validateFieldNumber } from './validateField.number';
import { validateFieldRequired } from './validateField.required';
import { validateFieldText } from './validateField.text';
import type { ValidateField } from './validateField.types';

export const validateField = (
  field: FieldWithValue,
  fields?: FormFields,
): ValidateField => {
  const messages: Message[] = [];
  const { type } = field;

  const combine = (errors: Message[]) =>
    Array.prototype.push.apply(messages, errors);

  // Check for generick validations
  combine(validateFieldRequired(field));

  // Apply field specific validations based on field type
  switch (type) {
    case 'date':
    case 'date_time':
      combine(validateFieldDateTime(field, fields));
      break;
    case 'text':
    case 'long_text': {
      combine(validateFieldText(field, fields));
      break;
    }
    case 'number':
      combine(validateFieldNumber(field, fields));
      break;
    case 'info_message':
      combine(validateInfoMessage(field as InfoMessageProps));
      break;
    default:
  }

  return {
    messages,
    isValid: !messages.some(message => message.severity === 'error'),
  };
};
