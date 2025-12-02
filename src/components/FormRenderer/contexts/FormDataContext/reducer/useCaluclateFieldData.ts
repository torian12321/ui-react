import type { ChoiceItem } from 'formRenderer/FieldRenderer/Fields/Fields.types';
import isEqual from 'lodash/isEqual';

import { useExternalData, useFormDataState } from '../FormDataContext';
import type { FieldData, FieldWithValue, FormFields } from '../types';
import type { ValidateField } from './validateField/validateField.types';
import { useGetFields, useGetInitialValues, useGetValues } from './selectors';
import { validateField } from './validateField';

const useGetFieldsWithValues = (): FieldWithValue[] => {
  const fields = useGetFields();
  const values = useGetValues();
  const initialValues = useGetInitialValues();

  return fields.map(field => ({
    ...field,
    value: values[field.name],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaultValue: initialValues[field?.name] as any,
  }));
};

const useCalculateIsPristine = (): ((fieldName: string) => boolean) => {
  const values = useGetValues();
  const initialValues = useGetInitialValues();

  return (fieldName: string) => {
    const value = values[fieldName];
    const initialValue = initialValues[fieldName];

    return isEqual(value, initialValue);
  };
};

const EMPTY_VALIDATION: ValidateField = {
  messages: [],
  isValid: true,
};

const useValidateField = (): ((fieldName: string) => ValidateField) => {
  const fields = useGetFieldsWithValues();

  return (fieldName: string) => {
    const field = fields.find(field => field.name === fieldName);

    if (!field) return EMPTY_VALIDATION;

    const fieldsObj = fields.reduce((acc, field) => {
      acc[field.name] = field;
      return acc;
    }, {} as FormFields);

    return validateField(field, fieldsObj);
  };
};

const useCalculateShowErrors = (): ((fieldName: string) => boolean) => {
  const fields = useGetFields();
  const { isSubmitted, validateAfterSubmit, touched = [] } = useFormDataState();

  return (fieldName: string) => {
    const field = fields.find(field => field.name === fieldName);
    const isTouched = touched.includes(fieldName);

    if (!field) return false;

    if (field?.type === 'info_message') return false;

    if (validateAfterSubmit) return isSubmitted;

    return isTouched || isSubmitted;
  };
};

/** If `customLabel` is provided at `properties`, get label from customLabels object */
const useGetLabel = (): ((name: string) => string) => {
  const { customLabels = {} } = useExternalData();
  const { fields = [] } = useFormDataState();

  return (name: string) => {
    const field = fields.find(field => field.name === name);
    const { properties = {} } = field ?? {};
    const { customLabel } = properties;

    if (customLabel && !customLabels[customLabel]) {
      console.warn(
        `Reference '${customLabel}' not provided, please add it to 'customLabel' object.`,
      );
    }

    if (customLabel) return customLabels[customLabel];

    return field?.label ?? '';
  };
};

/** If `choicesRef` is provided, get choices from collection if possible */
const useGetChoices = (): ((name: string) => ChoiceItem) => {
  const { choicesCollection = {} } = useExternalData();
  const { fields = [] } = useFormDataState();

  return (name: string) => {
    const field = fields.find(field => field.name === name);
    const { properties = {} } = field ?? {};
    const { choices: originalChoices = [], choicesRef } = properties;

    if (choicesRef && !choicesCollection[choicesRef]) {
      console.warn(
        `Collection '${choicesRef}' not provided, please add it to 'choicesCollection' object.`,
      );
    }

    let choicesItem: ChoiceItem;

    if (choicesRef && choicesCollection[choicesRef]) {
      choicesItem = choicesCollection[choicesRef];
    } else {
      choicesItem = {
        isLoading: false,
        choices: originalChoices,
      };
    }

    return {
      ...choicesItem,
      choices: choicesItem.choices.filter(({ show = true }) => show),
    };
  };
};

export const useCaluclateFieldData = (): ((
  fieldName: string,
) => FieldData | undefined) => {
  const { touched } = useFormDataState();
  const fields = useGetFieldsWithValues();
  const calculateIsPristine = useCalculateIsPristine();
  const calculateShowErrors = useCalculateShowErrors();
  const validate = useValidateField();
  const getChoices = useGetChoices();
  const getLabel = useGetLabel();

  return (fieldName: string) => {
    const field = fields.find(f => f.name === fieldName);

    if (!field) return undefined;

    const validations = validate(fieldName);
    const isPristine = calculateIsPristine(fieldName);
    const choices = getChoices(fieldName);
    const { isLoading: choicesLoading = false } = choices;

    return {
      ...field,
      label: getLabel(fieldName),
      choices,
      disabled: field?.disabled ?? choicesLoading,
      isTouched: touched.includes(fieldName),
      isPristine,
      isDirty: !isPristine,
      isRequired: Boolean(field?.validations?.required),
      isValid: validations.isValid,
      isLoading: choicesLoading,
      messages: validations.messages,
      showErrors: calculateShowErrors(fieldName),
    } satisfies FieldData;
  };
};
