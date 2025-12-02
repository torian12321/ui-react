import {
  FIELDS_WITH_OPTIONS,
  FIELDS_WITHOUT_INNER_LABEL,
  type FieldType,
  INFO_FIELDS,
} from '../FormRenderer.constants';

export const isInfoField = (type: FieldType): boolean =>
  INFO_FIELDS.includes(type);

export const isFieldWithLabel = (type: FieldType): boolean =>
  FIELDS_WITHOUT_INNER_LABEL.includes(type);

export const isFieldWithOptions = (type: FieldType): boolean =>
  FIELDS_WITH_OPTIONS.includes(type);
