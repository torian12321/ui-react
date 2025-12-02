import type { TextFieldProps } from '@mui/material/TextField';

import { isObject } from '@torian12321/js-utils/object';

import type { Choice, ChoiceValue, Properties } from './Fields.types';

export const getFieldChoices = (properties?: Properties): Choice[] => {
  const { choices = [] } = properties ?? {};

  return choices;
};

export const getCustomLabel = (properties?: Properties) => {
  return properties?.customLabel;
};

const getSelectedChoiceOption = (
  choices: Choice[] = [],
  value: ChoiceValue = null,
): Choice | null => choices.find(ch => ch.value === value) ?? null;

export const getSelectedChoice = (
  choices: Choice[] = [],
  value: ChoiceValue = null,
  iniValue: ChoiceValue = null,
): Choice | null => {
  const selectedChoice = getSelectedChoiceOption(choices, value);

  // `null` is a valid value set by user when clearing not required field.
  // It's safe to use this check here because `undefined` is used until the initial value is loaded.
  if (value === null) {
    return value;
  }

  if (selectedChoice) {
    return selectedChoice;
  }

  // If we can not find  a choice with `value`, try with `iniValue`
  // If the choices are loaded after the FormRenderer is rendered, `value` will be
  // set to null automatically before it has an oportunity to load a real value
  return getSelectedChoiceOption(choices, iniValue);
};

type DropdownOption = {
  value: ChoiceValue;
  label: string;
};
const isDropdownOption = (val: unknown): val is DropdownOption => isObject(val);
/**
  Sometimes the MUI Dropdown component returns an array of objects instead of just plain values (it does it automatically).
  Prevent this case and force it to be a plain array.
 */
export const getChoiceValues = (value: ChoiceValue[] = []): ChoiceValue[] =>
  value.map(v => (isDropdownOption(v) ? v.value : v));

export const getSelectedChoices = (
  choices: Choice[] = [],
  value: ChoiceValue[] = [],
): Choice[] => {
  const valuesArr = getChoiceValues(value);

  return choices.filter(ch => valuesArr.includes(ch.value));
};

/**
 * Funtionallity for `DatePicker` and `DateTimePicker` only to be used in TextField slot
 *
 * Destructure params + combine it with common ones.
 * Remove `slotProps` on the new object to avoid UI error.
 */
export const getSlotPropsTextField = (_params: TextFieldProps) => ({
  size: 'small' as const,
  variant: 'outlined' as const,
  type: 'text' as const,
  fullWidth: true,
  rows: 1,
  multiline: false,
});
