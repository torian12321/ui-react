import { TODAY } from '../../../../constants';
import type { Message } from '../../../../FieldRenderer';

export type FormFieldValidations = { [fieldName: string]: ValidateField };
export type ValidateField = {
  messages: Message[];
  isValid: boolean;
};

export type ValidationObj<T> = {
  value?: T;
  /** Custom message for the indicated validation */
  message?: string;
  /** FieldName of a third field to reference */
  ref?: string;
};
export type Validation<T> = T | ValidationObj<T>;

export type SharedValidations = {
  /** Will force the field to have a value */
  required?: Validation<boolean>;
};

export type TextValidations = SharedValidations & {
  /** Min characters length */
  min_length?: Validation<number>;
  /** Max characters length */
  max_length?: Validation<number>;
};
export type MumericalValidations = SharedValidations & {
  min?: Validation<number>;
  max?: Validation<number>;
};

// any string will be allowed, but 'today' is suggested
export type DateType = typeof TODAY | (string & {});
export type DateValidations = SharedValidations & {
  min_date?: Validation<DateType>;
  max_date?: Validation<DateType>;
};
