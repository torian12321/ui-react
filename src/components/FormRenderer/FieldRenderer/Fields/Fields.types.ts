import { FIELD_TYPE } from 'src/components/FormRenderer/constants';

export type FieldProps<
  FieldNames extends string = string,
  ChoicesRef extends string = string,
> = {
  name: FieldNames;
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
  required?: boolean;
  properties?: Properties<ChoicesRef>;
  severity?: 'info' | 'warning' | 'error';
  onBlur?: VoidFunction;
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

type FieldGenericTypes<T> = {
  value?: T;
  iniValue?: T;
  onChange: (val: T) => void;
};

type TextFieldProps = FieldGenericTypes<string> & {
  type: typeof FIELD_TYPE.TEXT;
};

type LongTextFieldProps = FieldGenericTypes<string> & {
  type: typeof FIELD_TYPE.LONG_TEXT;
};

type NumberFieldProps = FieldGenericTypes<number | undefined> & {
  type: typeof FIELD_TYPE.NUMBER;
};

type BooleanFieldProps = FieldGenericTypes<boolean | undefined> & {
  type: typeof FIELD_TYPE.BOOLEAN;
};

export type FileFieldProps = FieldGenericTypes<File | FileList | undefined> & {
  type: typeof FIELD_TYPE.FILE_UPLOAD;
  accept?: string[];
  isUploading?: boolean;
  sizeLimit?: number; // In bytes
  isUsingIcon?: boolean;
  multiple?: boolean;
};

type DateFieldProps = FieldGenericTypes<string | Date> & {
  type: typeof FIELD_TYPE.DATE;
  onChange: (val: string | null) => void;
};
type DateTimeFieldProps = FieldGenericTypes<string | Date> & {
  type: typeof FIELD_TYPE.DATE_TIME;
  onChange: (val: string | null) => void;
};

type SelectFieldProps = FieldGenericTypes<
  ChoiceValue | ChoiceValue[] | null
> & {
  type: typeof FIELD_TYPE.DROPDOWN;
};
type RadioGroupFieldProps = FieldGenericTypes<ChoiceValue> & {
  type: typeof FIELD_TYPE.RADIO_BUTTON;
};
type OptionsListFieldProps = FieldGenericTypes<ChoiceValue[]> & {
  type: typeof FIELD_TYPE.OPTIONS_LIST;
};
type TransferListFieldProps = FieldGenericTypes<ChoiceValue[]> & {
  type: typeof FIELD_TYPE.TRANSFER_LIST;
  onChange: (val: ChoiceValue[]) => void;
};

type InfoMessageProps = {
  type: typeof FIELD_TYPE.INFO_MESSAGE;
  value?: string;
  iniValue?: string;
  onChange: never;
};
type InfoListProps = {
  type: typeof FIELD_TYPE.INFO_LIST;
  value?: string;
  iniValue?: string;
  onChange: never;
};

type LabelProps = {
  type: typeof FIELD_TYPE.LABEL;
  value?: string;
  iniValue?: string;
  onChange: never;
};

export type ChoiceValue = string | number | null;
export type Choice<V extends ChoiceValue = ChoiceValue> = {
  value: V;
  label?: string;
  disabled?: boolean;
  show?: boolean;
};

export type Properties<ChoicesRef extends string = string> = {
  severity?: 'info' | 'warning' | 'error' | undefined;
  choices?: Choice[];
  choicesRef?: ChoicesRef;
  customLabel?: string;
};

export type ChoiceItem<V extends ChoiceValue = ChoiceValue> = {
  isLoading?: boolean;
  choices: Choice<V>[];
};

export type ChoicesCollection<ChoicesRef extends string = string> = {
  [key in ChoicesRef]: ChoiceItem;
};

export type CustomLabels<FieldNames extends string = string> = {
  [key in FieldNames]: string;
};
