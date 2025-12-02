import { getCurrentDate, getCurrentDateTime } from '@torian12321/js-utils';

import {
  EMPTY_FIELD_VALUES,
  RB_UNSELECTED,
  TODAY,
} from '../../../FormRenderer.constants';
import type { DefaultValues, Field } from '../../../FormRenderer.types';
import type { FieldValues } from '../reducer';

/** Set the initial value for a field, before any default value is applied */
const setEmptyValues = (field: Field): unknown => {
  const { type, properties = {} } = field;

  if (type === 'radio_button') {
    const { choices = [] } = properties;
    return choices.length ? choices[0].value : undefined;
  }

  return EMPTY_FIELD_VALUES[type];
};

const calculateInitialFieldValue = (
  /** Field to calculate the initial value. */
  field: Field,
  /** Default values to use if the field value is not set on FormRenderer. */
  defaultValues: DefaultValues = {},
): unknown => {
  const { type, name, defaultValue = undefined } = field;

  // Try to get fisrt the value set on FormRenderer, and if not set, the one on the field itself
  let value: unknown = defaultValues[name] ?? defaultValue;

  value ??= setEmptyValues(field);

  /* ----------------------- */
  /* Cover special scenarios */
  /* ----------------------- */
  if (value === TODAY) {
    switch (type) {
      case 'date':
        value = getCurrentDate();
        break;
      case 'date_time':
        value = getCurrentDateTime();
        break;
      default:
        break;
    }
  } else if (value === RB_UNSELECTED && type === 'radio_button') {
    value = null;
  }

  return value;
};

/**
 * Get the initial values for fields, considering the default values
 * from both, the form and the field.
 */
export const getInitialFormValues = (
  fields: Field[] = [],
  /** Form default values. */
  defaultValues: DefaultValues = {},
): FieldValues =>
  fields.reduce(
    (acc, field) => ({
      ...acc,
      [field.name]: calculateInitialFieldValue(field, defaultValues),
    }),
    {},
  );

/**
 * Get the initial values for fields, before any default value is applied.
 * This is used to clear the form.
 */
export const getEmptyFormValues = (fields: Field[] = []): FieldValues =>
  fields.reduce(
    (acc, field) => ({
      ...acc,
      [field.name]: setEmptyValues(field),
    }),
    {},
  );
