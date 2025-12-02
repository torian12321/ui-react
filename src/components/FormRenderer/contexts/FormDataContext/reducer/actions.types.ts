import type { FieldValue } from '../../../FormRenderer.types';
import type { FieldData } from '../types';

export type FormValues<FieldNames extends string = string> = {
  [fieldName in FieldNames]: FieldValue;
};
export type FormDetails = {
  isValid: boolean;
  /** Check if the form has the same values as the initial values */
  isPristine: boolean;
  /** Check if the form has been changed */
  isDirty: boolean;
  invalidFields: string[];
};

export type OnSubmitArgs<FieldNames extends string = string> = {
  values: FormValues<FieldNames>;
  allValues: FormValues<FieldNames>;
  /** @deprecated Use `formDetails.isValid` instead */
  isValid: boolean;
  /** @deprecated Use `formDetails.invalidFields` instead */
  invalidFields: string[];
  formDetails: FormDetails;
};
export type OnSubmit<FieldNames extends string = string> = (
  props: OnSubmitArgs<FieldNames>,
) => void;

export type OnChangeArgs<FieldNames extends string = string> = {
  values: FormValues<FieldNames>;
  allValues: FormValues<FieldNames>;
  fieldsData?: {
    [fieldName in FieldNames]: FieldData;
  };
  formDetails: FormDetails;
};
export type OnChange<FieldNames extends string = string> = (
  props: OnChangeArgs<FieldNames>,
) => void;
