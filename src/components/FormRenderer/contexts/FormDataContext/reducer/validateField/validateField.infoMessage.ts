import type { Message } from 'formRenderer/FieldRenderer';
import type { InfoMessageProps } from 'formRenderer/FormRenderer.types';

import { localization } from 'src/localization';

import { addErrorMessage } from './validateField.utils';

export const validateInfoMessage = (field: InfoMessageProps): Message[] => {
  const { properties } = field;
  const { severity = 'info' } = properties ?? {};

  if (['warning', 'error'].includes(severity)) {
    return [
      addErrorMessage(
        localization('components.formRenderer.errorMessages.reviewConditions'),
      ),
    ];
  }

  return [];
};
