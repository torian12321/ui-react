import { useMemo } from 'react';

import type { Field } from '../../../FormRenderer.types';
import { useFormDataState } from '../FormDataContext';
import type { FieldData } from '../types';
import type { FormDetails, OnChangeArgs, OnSubmitArgs } from './actions.types';
import { useCaluclateFieldData } from './useCaluclateFieldData';

// ------------------ //
// - Base Selectors - //
// ------------------ //

export const useGetFields = (): Field[] => useFormDataState().fields;
export const useGetValues = (): Record<string, unknown> =>
  useFormDataState().values;
export const useGetInitialValues = (): Record<string, unknown> =>
  useFormDataState().initialData.values;

// ------------------- //
// - Field Selectors - //
// ------------------- //
export const useGetFieldData = (fieldName: string): FieldData | undefined =>
  useCaluclateFieldData()(fieldName);

export const useGetAllFieldsData = (): Record<string, FieldData> => {
  const fields = useGetFields();
  const calculateFieldData = useCaluclateFieldData();

  return useMemo(() => {
    return fields.reduce(
      (acc, field) => {
        const fieldData = calculateFieldData(field.name);
        if (!fieldData) return acc;

        acc[fieldData.name] = {
          ...fieldData,
        };
        return acc;
      },
      {} as Record<string, FieldData>,
    );
  }, [fields, calculateFieldData]);
};

// ------------------- //
// - Form Selectors - //
// ------------------- //

const getVisibleFields = (fieldsData: Record<string, FieldData>): FieldData[] =>
  Object.values(fieldsData).filter(({ visible = true }) => visible);

const getFormDetails = (
  fieldsData: FieldData[] = [],
): FormDetails & {
  values: Record<string, unknown>;
} => {
  const invalidFields: string[] = [];
  const values: Record<string, unknown> = {};
  let isPristine = true;

  fieldsData.forEach(field => {
    if (!field.isValid) invalidFields.push(field.name);
    if (!field.isPristine) isPristine = false;

    values[field.name] = field.value;
  });

  return {
    values,
    isValid: !invalidFields.length,
    isPristine,
    isDirty: !isPristine,
    invalidFields,
  };
};

export const useGetOnSubmitFormArgs = (): OnSubmitArgs => {
  const allValues = useGetValues();
  const fieldsData = useGetAllFieldsData();
  const visibleFields = getVisibleFields(fieldsData);
  const { values, isValid, invalidFields, isPristine } =
    getFormDetails(visibleFields);

  return {
    values,
    allValues,
    isValid,
    invalidFields,
    formDetails: {
      isValid,
      isPristine,
      isDirty: !isPristine,
      invalidFields,
    },
  };
};

export const useGetOnChangeFormArgs = (): OnChangeArgs => {
  const allValues = useGetValues();
  const fieldsData = useGetAllFieldsData();
  const visibleFields = getVisibleFields(fieldsData);
  const { values, ...restDetails } = getFormDetails(visibleFields);

  return {
    values,
    allValues,
    fieldsData,
    formDetails: {
      ...restDetails,
    },
  };
};
