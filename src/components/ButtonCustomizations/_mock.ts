import type { Option } from './ButtonCustomizations.types';

export const defaultOptions: Option[] = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3', disabled: true },
];

export const customOptions: Option[] = [
  { value: '4', label: 'Option 4', canDelete: true, disabled: true },
  { value: '5', label: 'Option 5', canDelete: true },
  { value: '6', label: 'Option 5', canDelete: true },
];

export const customOptionsLong: Option[] = customOptions.map(option => ({
  ...option,
  label: `${option.label} with very long label that should be truncated`,
}));
