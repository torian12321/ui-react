import { LOGIC_ACTIONS } from 'formRenderer/constants';
import type { ChoiceValue } from 'formRenderer/FieldRenderer';
import { isFieldWithOptions } from 'formRenderer/FieldRenderer/FieldRenderer.utils';
import type { ActionDetails } from 'formRenderer/FormRenderer.types';

import { FieldWithValue } from '../types';

export const getActionUpdates = (
  actionDetails: ActionDetails,
  conditionPasses: boolean,
  originalfield: FieldWithValue,
): Partial<FieldWithValue> => {
  const { action } = actionDetails;

  const update = {
    validations: {},
  } as Partial<FieldWithValue>;

  switch (action) {
    case LOGIC_ACTIONS.SHOW:
      update.visible = conditionPasses;
      break;

    case LOGIC_ACTIONS.HIDE:
      update.visible = !conditionPasses;
      break;

    case LOGIC_ACTIONS.MAKE_MANDATORY:
      update.validations = {
        ...update.validations,
        required: conditionPasses,
      };
      break;

    case LOGIC_ACTIONS.MAKE_DISABLED:
      update.disabled = conditionPasses;
      break;

    case LOGIC_ACTIONS.MAKE_ENABLED:
      update.disabled = !conditionPasses;
      break;

    case LOGIC_ACTIONS.MAKE_READ_ONLY:
      update.readOnly = conditionPasses;
      break;

    case LOGIC_ACTIONS.EXCLUDE_CHOICES: {
      const { properties = {}, type } = originalfield;

      if (isFieldWithOptions(type)) {
        const { choices = [] } = properties;
        const { exclude } = actionDetails;
        const excludedValues: ChoiceValue[] = Array.isArray(exclude)
          ? exclude
          : [exclude];

        update.properties = {
          ...properties,
          choices: choices.map(choice => ({
            ...choice,
            show: !(conditionPasses && excludedValues.includes(choice.value)),
          })),
        };
      }
      break;
    }
    default:
      break;
  }

  return update;
};
