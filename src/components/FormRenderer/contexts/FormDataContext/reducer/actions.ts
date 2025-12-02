import { useFormDataDispatch } from '../FormDataContext';
import type { OnSubmit } from './actions.types';
import { useGetOnSubmitFormArgs } from './selectors';

// ----------------- //
// - Field Actions - //
// ----------------- //

export const useSetValue = (fieldName: string): ((value: unknown) => void) => {
  const dispatch = useFormDataDispatch();

  return (value: unknown) => {
    dispatch({
      type: 'setValue',
      payload: { fieldName, value },
    });
  };
};

export const useSetFieldValue = <FieldNames extends string = string>(): ((
  fieldName: FieldNames,
  value: unknown,
) => void) => {
  const dispatch = useFormDataDispatch();

  return (fieldName: FieldNames, value: unknown) => {
    dispatch({
      type: 'setValue',
      payload: { fieldName, value },
    });
  };
};

/**
 * Touched fields will display errors if any.
 * Touch should be called onBlur for fields with 'input box' (TextInput, Textarea, Select, etc.)
 * Touch should be called onChange for fields with 'touchable area' (Checkbox, Radio, etc.)
 */
export const useTouchField = (fieldName: string): VoidFunction => {
  const dispatch = useFormDataDispatch();

  return () => {
    dispatch({
      type: 'touchField',
      payload: fieldName,
    });
  };
};

// ---------------- //
// - Form Actions - //
// ---------------- //

export const useSubmitForm = (onSubmit: OnSubmit): VoidFunction => {
  const dispatch = useFormDataDispatch();
  const onSubmitForArgs = useGetOnSubmitFormArgs();

  return () => {
    dispatch({
      type: 'submitForm',
      payload: onSubmitForArgs.isValid,
    });

    onSubmit(onSubmitForArgs);
  };
};

export const useResetForm = (): VoidFunction => {
  const dispatch = useFormDataDispatch();

  return () => {
    dispatch({ type: 'resetForm' });
  };
};

export const useClearForm = (): VoidFunction => {
  const dispatch = useFormDataDispatch();

  return () => {
    dispatch({ type: 'clearForm' });
  };
};
