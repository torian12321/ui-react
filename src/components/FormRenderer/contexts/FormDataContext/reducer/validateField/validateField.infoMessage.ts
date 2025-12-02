import type { Message } from '../../../../FieldRenderer';
import type { InfoMessageProps } from '../../../../FormRenderer.types';
import { addErrorMessage } from './validateField.utils';

export const validateInfoMessage = (field: InfoMessageProps): Message[] => {
  const { properties } = field;
  const { severity = 'info' } = properties ?? {};

  if (['warning', 'error'].includes(severity)) {
    return [addErrorMessage('Please review conditions.')];
  }

  return [];
};
