import type { Field, FormLogic } from 'formRenderer/FormRenderer.types';

import { isString, mergeDeep } from '@torian12321/js-utils';

import type { FieldValues } from '../reducer';
import type { FieldWithValue, FormFields } from '../types';
import { checkIfConditionPass, fieldExist } from './checkIfConditionPass';
import { getActionUpdates } from './getActionUpdates';

export const applyFieldLogic = (
  formFields: Field[] = [],
  formLogic: FormLogic[] = [],
  values: FieldValues = {},
): Field[] => {
  let newFields: FormFields = formFields.reduce((acc, field) => {
    acc[field.name] = {
      ...field,
      value: values[field.name],
    };
    return acc;
  }, {} as FormFields);

  formLogic.forEach(({ actions = [], condition }) => {
    const conditionPasses = checkIfConditionPass(formFields, values, condition);

    actions.forEach(action => {
      const { ref } = action;
      const refValues = isString(ref) ? [ref] : ref;

      refValues.forEach(fieldRef => {
        if (!fieldExist(formFields, fieldRef)) return;

        // Combine the current field config + any possible update applied from actions
        const updatedField = mergeDeep(
          newFields[fieldRef] as Partial<FieldWithValue>,
          getActionUpdates(action, conditionPasses, newFields[fieldRef]),
        ) as Partial<Field>;

        newFields = {
          ...newFields,
          [fieldRef]: removeRedundantChoices(updatedField) as FieldWithValue,
        };
      });
    });
  });

  return Object.values(newFields);
};

// When executing `mergeDeep` combining old and new field,
// some times options are added twice
// This function removes redundant options.
const removeRedundantChoices = (field: Partial<Field>): Partial<Field> => {
  const { choices = [] } = field?.properties ?? {};
  const uniqueChoices = Array.from(
    new Map(choices.map(choice => [choice.value, choice])).values(),
  );

  return {
    ...field,
    properties: {
      ...field.properties,
      choices: uniqueChoices,
    },
  };
};
