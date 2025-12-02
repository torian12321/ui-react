import type { MuiStyles } from 'src/types';

import type { OnChange, OnSubmit } from './contexts/FormDataContext';
import type {
  DateType,
  DateValidations,
  MumericalValidations,
  SharedValidations,
  TextValidations,
} from './contexts/FormDataContext/reducer/validateField/validateField.types';
import type { FormStylesContextProps } from './contexts/FormStylesContext';
import type {
  ChoicesCollection,
  ChoiceValue,
  CustomLabels,
  Message,
  Properties,
} from './FieldRenderer';
import {
  FIELD_TYPE,
  LOGIC_ACTIONS,
  LOGIC_TYPES,
  LogicAction,
  LogicType,
} from './FormRenderer.constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FieldValue = any;
export type DefaultValues<FieldNames extends string = string> = {
  [fieldName in FieldNames]: unknown;
};

export type FormRendererProps<
  FieldNames extends string = string,
  ChoicesRef extends string = string,
> = FormStylesContextProps & {
  id: string;
  fields: Field<FieldNames, ChoicesRef>[];
  logic?: FormLogic<FieldNames>[];
  disabled?: boolean;
  defaultValues?: DefaultValues<FieldNames>;
  choicesCollection?: ChoicesCollection<ChoicesRef>;
  customLabels?: CustomLabels;

  /** If `false`, only show validations after form is submited. */
  validateAfterSubmit?: boolean;

  /** Styles to apply to from wrapper component */
  sxForm?: MuiStyles;

  // Actions
  onSubmit?: OnSubmit<FieldNames>;
  onChange?: OnChange<FieldNames>;
};

export type FormSchema<
  FieldNames extends string = string,
  ChoicesRef extends string = string,
> = {
  fields: Field<FieldNames, ChoicesRef>[];
  logic?: FormLogic<FieldNames>[];
};

export type Field<
  FieldNames extends string = string,
  ChoicesRef extends string = string,
> = {
  name: FieldNames;
  label?: string;
  infoMessage?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  visible?: boolean;

  properties?: Properties<ChoicesRef>;
} & (
  | TextFieldProps
  | LongTextFieldProps
  | NumberFieldProps
  | DateFieldProps
  | DateTimeFieldProps
  | BooleanFieldProps
  | FileFieldProps
  | SelectFieldProps
  | RadioGroupFieldProps
  | OptionsListFieldProps
  | TransferListFieldProps
  | InfoMessageProps
  | InfoListProps
  | LabelProps
);

/* ---------------------------------------------- */
// Define Field specific types based on `type` prop
/* ---------------------------------------------- */
type TextFieldProps = {
  type: typeof FIELD_TYPE.TEXT;
  defaultValue?: string;
  validations?: TextValidations;
};
type LongTextFieldProps = {
  type: typeof FIELD_TYPE.LONG_TEXT;
  defaultValue?: string;
  validations?: TextValidations;
};
type NumberFieldProps = {
  type: typeof FIELD_TYPE.NUMBER;
  defaultValue?: number;
  validations?: MumericalValidations;
};

type DateDefaultValue = DateType | ((string | Date) & { date?: string | Date });
type DateFieldProps = {
  type: typeof FIELD_TYPE.DATE;
  defaultValue?: DateDefaultValue;
  validations?: DateValidations;
};
type DateTimeFieldProps = {
  type: typeof FIELD_TYPE.DATE_TIME;
  defaultValue?: DateDefaultValue;
  validations?: DateValidations;
};
type BooleanFieldProps = {
  type: typeof FIELD_TYPE.BOOLEAN;
  defaultValue?: boolean;
  validations?: SharedValidations;
};
type FileFieldProps = {
  type: typeof FIELD_TYPE.FILE_UPLOAD;
  defaultValue?: File;
  validations?: SharedValidations;
};
type SelectFieldProps = {
  type: typeof FIELD_TYPE.DROPDOWN;
  validations?: SharedValidations;
} & (
  | {
      defaultValue?: ChoiceValue;
    }
  | {
      multi: true;
      defaultValue?: ChoiceValue[];
    }
);
type RadioGroupFieldProps = {
  type: typeof FIELD_TYPE.RADIO_BUTTON;
  defaultValue?: ChoiceValue;
  validations?: SharedValidations;
};
type OptionsListFieldProps = {
  type: typeof FIELD_TYPE.OPTIONS_LIST;
  defaultValue?: ChoiceValue[];
  validations?: SharedValidations;
};
type TransferListFieldProps = {
  type: typeof FIELD_TYPE.TRANSFER_LIST;
  defaultValue?: ChoiceValue[];
  validations?: SharedValidations;
};
export type InfoMessageProps = {
  type: typeof FIELD_TYPE.INFO_MESSAGE;
  defaultValue?: never;
  validations?: never;
  properties?: {
    severity?: 'info' | 'warning' | 'error';
  };
};
type InfoListProps = {
  type: typeof FIELD_TYPE.INFO_LIST;
  defaultValue?: never;
  validations?: never;
};
type LabelProps = {
  type: typeof FIELD_TYPE.LABEL;
  defaultValue?: never;
  validations?: never;
};

export type FormField = Omit<Field, 'defaultValue'> & {
  value: FieldValue;
  iniValue?: FieldValue;
  visible: boolean;
  touched: boolean;
  isValid: boolean;
  messages: Message[];
  multi?: boolean;
};

/* -------------- */
// Form Logic types
/* -------------- */
export type ConditionTypeLogical =
  | typeof LOGIC_TYPES.AND
  | typeof LOGIC_TYPES.OR;
export type ConditionTypeBasic = Exclude<LogicType, ConditionTypeLogical>;

export type FormLogicCondition<FieldNames extends string = string> =
  | ConditionBasic<FieldNames>
  | ConditionLogical<FieldNames>
  | ConditionHasValue<FieldNames>;

export type ConditionLogical<FieldNames extends string = string> = {
  type: ConditionTypeLogical;
  conditions: FormLogicCondition<FieldNames>[];
};
export type ConditionBasic<FieldNames extends string = string> = {
  type: Exclude<ConditionTypeBasic, typeof LOGIC_TYPES.HAS_VALUE>;
  ref: FieldNames;
  value: FieldValue;
};
export type ConditionHasValue<FieldNames extends string = string> = {
  type: typeof LOGIC_TYPES.HAS_VALUE;
  ref: FieldNames;
};

type ActionExcludeChoice<FieldNames extends string = string> = {
  ref: FieldNames | FieldNames[];
  action: typeof LOGIC_ACTIONS.EXCLUDE_CHOICES;
  exclude: ChoiceValue | ChoiceValue[];
};

export type ActionDetails<FieldNames extends string = string> =
  | {
      /** WHERE - Field(s) that will be affected by the logic. */
      ref: FieldNames | FieldNames[];
      /** WHAT - Action to take when the condition is fulfilled. */
      action: Exclude<LogicAction, typeof LOGIC_ACTIONS.EXCLUDE_CHOICES>;
    }
  | ActionExcludeChoice<FieldNames>;

export type FormLogic<FieldNames extends string = string> = {
  /**  WHEN - Condition that will trigger the action. */
  condition: FormLogicCondition<FieldNames>;
  actions: ActionDetails<FieldNames>[];
};
