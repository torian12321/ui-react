import type { TypeFromObject } from 'src/types/utils';

import type { FieldValue } from './FormRenderer.types';

export const FIELD_TYPE = {
  TEXT: 'text',
  LONG_TEXT: 'long_text',
  NUMBER: 'number',
  DATE: 'date',
  DATE_TIME: 'date_time',
  BOOLEAN: 'boolean',
  FILE_UPLOAD: 'file_upload',

  DROPDOWN: 'dropdown',
  OPTIONS_LIST: 'options_list',
  RADIO_BUTTON: 'radio_button',
  TRANSFER_LIST: 'transfer_list',

  // Info fields
  INFO_MESSAGE: 'info_message',
  INFO_LIST: 'info_list',
  LABEL: 'label',
} as const;

export type FieldType = TypeFromObject<typeof FIELD_TYPE>;

export const FIELDS_WITHOUT_INNER_LABEL: FieldType[] = [
  FIELD_TYPE.BOOLEAN,
  FIELD_TYPE.FILE_UPLOAD,
  FIELD_TYPE.RADIO_BUTTON,
];

export const FIELDS_WITH_OPTIONS: FieldType[] = [
  FIELD_TYPE.DROPDOWN,
  FIELD_TYPE.RADIO_BUTTON,
  FIELD_TYPE.OPTIONS_LIST,
  FIELD_TYPE.INFO_LIST,
  FIELD_TYPE.TRANSFER_LIST,
];

export const INFO_FIELDS: FieldType[] = [
  FIELD_TYPE.INFO_MESSAGE,
  FIELD_TYPE.LABEL,
  FIELD_TYPE.INFO_LIST,
];

export const LOGIC_TYPES = {
  EQUAL: 'equal',
  NOT_EQUAL: 'not_equal',
  HAS_VALUE: 'has_value',
  CONTAINS: 'contains',
  LOWER_THAN: 'lower_than',
  GREATER_THAN: 'greater_than',
  AND: 'and',
  OR: 'or',
} as const;
export type LogicType = TypeFromObject<typeof LOGIC_TYPES>;

export const LOGIC_ACTIONS = {
  SHOW: 'show',
  HIDE: 'hide',
  MAKE_MANDATORY: 'make_mandatory',
  MAKE_DISABLED: 'make_disabled',
  MAKE_ENABLED: 'make_enabled',
  MAKE_READ_ONLY: 'make_read_only',
  /** For dropdowns, radio buttons, and options lists. */
  EXCLUDE_CHOICES: 'exclude_choices',
} as const;
export type LogicAction = TypeFromObject<typeof LOGIC_ACTIONS>;

export const TODAY = 'today';
export const RB_UNSELECTED = 'rb_unselected';

/**
 * Each field type have a different 'empty' value.
 * use `EMPTY_FIELD_VALUES` to set initial values or when reseting.
 */
export const EMPTY_FIELD_VALUES = {
  [FIELD_TYPE.TEXT]: '',
  [FIELD_TYPE.LONG_TEXT]: '',

  [FIELD_TYPE.NUMBER]: '',

  // If not set to null, datepicker will show a date on render when value is undefined.
  [FIELD_TYPE.DATE]: null,
  [FIELD_TYPE.DATE_TIME]: null,

  [FIELD_TYPE.BOOLEAN]: false,
  [FIELD_TYPE.FILE_UPLOAD]: undefined,
  [FIELD_TYPE.DROPDOWN]: undefined,
  [FIELD_TYPE.OPTIONS_LIST]: [],
  [FIELD_TYPE.RADIO_BUTTON]: undefined,
  [FIELD_TYPE.TRANSFER_LIST]: [],

  // Info fields
  [FIELD_TYPE.INFO_MESSAGE]: undefined,
  [FIELD_TYPE.INFO_LIST]: undefined,
  [FIELD_TYPE.LABEL]: undefined,
} satisfies Record<FieldType, FieldValue>;
