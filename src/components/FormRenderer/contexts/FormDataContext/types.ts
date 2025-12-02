import type { ChoiceItem } from '../../FieldRenderer/Fields/Fields.types';
import type { Message } from '../../FieldRenderer/FieldWrapper/FieldWrapper.types';
import type { Field } from '../../FormRenderer.types';

export type FieldWithValue<FieldNames extends string = string> =
  Field<FieldNames> & {
    value: unknown;
    visible?: boolean;
  };
export type FormFields = { [fieldName: string]: FieldWithValue };

/**
 * FieldData is a type that extends the base `Field` type with additional properties.
 * It is used to store the data of a field in the form.
 */
export type FieldData<FieldNames extends string = string> =
  Field<FieldNames> & {
    value: unknown;
    choices: ChoiceItem;
    /**
     * Whether the field has been updated by the user. (on blur)
     * Useful for validation, show errors only once the field is touched.
     * Re-renders and onChange because of recalculation of the field should not be used cause touched to be `true`.
     */
    isTouched: boolean;
    /** Check if the field has the same value as the initial value. */
    isPristine: boolean;
    /** Check if the field has a different value than the initial value. */
    isDirty: boolean;
    isRequired: boolean;
    isValid: boolean;
    isLoading: boolean;
    messages: Message[];
    showErrors: boolean;
  };
