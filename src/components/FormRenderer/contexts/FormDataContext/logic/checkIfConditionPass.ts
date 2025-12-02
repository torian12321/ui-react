import type {
  ConditionLogical,
  Field,
  FormLogicCondition,
} from 'formRenderer/FormRenderer.types';

import { isNumber, isString } from '@torian12321/js-utils/typeChecker';

import { FieldValues } from '../reducer';

export const fieldExist = (formFields: Field[], fieldName: string): boolean =>
  Boolean(formFields.find(field => field.name === fieldName));

const fieldIsVisible = (formFields: Field[], fieldName: string): boolean => {
  const field = formFields.find(field => field.name === fieldName);
  const { visible = true } = field ?? {};

  return visible;
};

const isLogicCondition = (con: FormLogicCondition): con is ConditionLogical =>
  ['and', 'or'].includes(con.type);

export const checkIfConditionPass = (
  formFields: Field[],
  values: FieldValues,
  condition: FormLogicCondition,
): boolean => {
  if (isLogicCondition(condition)) {
    const { type, conditions = [] } = condition;

    // For 'AND' & 'OR' types do a recursive call with all subconditions.
    switch (type) {
      case 'or':
        return conditions.some(subCondition =>
          checkIfConditionPass(formFields, values, subCondition),
        );
      case 'and':
        return conditions.every(subCondition =>
          checkIfConditionPass(formFields, values, subCondition),
        );
      default:
        return false;
    }
  }

  const { type, ref } = condition;
  const fieldValue = values[ref];

  if (!fieldExist(formFields, ref)) return false;
  if (!fieldIsVisible(formFields, ref)) return false;

  // HasValue does no need a value to compare.
  if (condition.type === 'has_value') {
    return ![undefined, null, ''].includes(fieldValue as string);
  }

  const { value } = condition;

  switch (type) {
    case 'equal':
      return Array.isArray(value)
        ? value.includes(fieldValue)
        : fieldValue === value;
    case 'not_equal':
      return Array.isArray(value)
        ? !value.includes(fieldValue)
        : fieldValue !== value;
    case 'contains': {
      if (Array.isArray(fieldValue)) return fieldValue.includes(value);
      if (isString(fieldValue)) return fieldValue.includes(value);
      if (isNumber(fieldValue))
        return fieldValue.toString().includes(value.toString());

      return false;
    }
    case 'lower_than':
      return (fieldValue as number) < value;
    case 'greater_than':
      return (fieldValue as number) > value;
    default:
      return false;
  }
};
