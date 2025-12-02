import type {
  ChoicesCollection,
  CustomLabels,
} from '../../../FieldRenderer/Fields/Fields.types';
import type { Field, FormLogic } from '../../../FormRenderer.types';

export type FieldValues = { [fieldName: string]: unknown };

export type ExternalData = {
  choicesCollection: ChoicesCollection;
  customLabels: CustomLabels;
};

export type Context = [State, Dispatch, ExternalData];
export type Dispatch = (action: Action) => void;

export type State = {
  values: FieldValues;
  fields: Field[];
  logic: FormLogic[];
  /** List of fields that have been touched. */
  touched: string[];
  isSubmitted: boolean;
  isSubmitSuccessful: boolean;
  /**
   * If `true`, the form will show validation messages after submission.
   * If `false`, the form will show validation messages after the first time the user touches the field.
   */
  validateAfterSubmit?: boolean;
  initialData: {
    values: FieldValues;
    fields: Field[];
  };
};

// ---------------- //
// - Action types - //
// ---------------- //
export type Action =
  | SetValueAction
  | TouchFieldAction
  | ResetFormAction
  | ClearFormAction
  | SubmitFormAction;

type BaseAction<T extends string, P = null> = {
  type: T;
  payload?: P;
};

type SetValueAction = BaseAction<
  'setValue',
  {
    fieldName: string;
    value: unknown;
  }
>;
type TouchFieldAction = BaseAction<'touchField', string>;
type ResetFormAction = BaseAction<'resetForm'>;
type ClearFormAction = BaseAction<'clearForm'>;
type SubmitFormAction = BaseAction<'submitForm', boolean>;
