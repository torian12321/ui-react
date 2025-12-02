import type { PropsWithChildren, RefObject } from 'react';

import type {
  ComponentWithStyles,
  ComponentWithTestId,
} from '../../../../../../types';
import type { OnChange, OnSubmit } from '../../';

export type FormProps = PropsWithChildren<ComponentWithTestId> &
  ComponentWithStyles & {
    id?: string;
    disabled?: boolean;
    onChange?: OnChange;
    onSubmit?: OnSubmit;
  };

/** Use the `ref` prop to access internal <Form /> actions. */
export type FormRef<FieldNames extends string = string> = {
  submitForm: () => void;
  /**
   * Set Fields to initial values, from Form `defaultValues` prop + Fields `defaultValue`.
   * Reset form to initial state, non-touched fields, non-submitted form, etc.
   */
  resetForm: () => void;
  /**
   * Set Fields to empty values.
   * Reset form to initial state, non-touched fields, non-submitted form, etc.
   */
  clearForm: () => void;
  setFieldValue: (fieldName: FieldNames, value: unknown) => void;
};

export type ComponentProps = FormProps & {
  ref: RefObject<FormRef>;
};
