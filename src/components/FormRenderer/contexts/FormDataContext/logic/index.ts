import isEqual from 'lodash/isEqual';

import type { Field, FormLogic } from '../../../FormRenderer.types';
import type { FieldValues } from '../reducer';
import { applyFieldLogic as applyFieldLogicOnce } from './applyLogic';

export const applyFieldLogic = (
  formFields: Field[] = [],
  formLogic: FormLogic[] = [],
  values: FieldValues = {},
): Field[] => {
  const applyLogicOnce = (fields: Field[]): Field[] => {
    return applyFieldLogicOnce(fields, formLogic, values);
  };

  let currentFields = formFields;
  let nextFields = applyLogicOnce(currentFields);

  while (!isEqual(currentFields, nextFields)) {
    currentFields = nextFields;
    nextFields = applyLogicOnce(currentFields);
  }

  return currentFields;
};
