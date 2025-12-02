import type { JSX } from 'react';

import type { TransferListItem, TransferListItemValue } from 'src/components';
import { TransferList } from 'src/components';
import { FIELD_TYPE } from 'src/components/FormRenderer/constants';

import type { ChoiceValue, FieldProps } from './Fields.types';
import { getFieldChoices } from './Fields.utils';

// TODO: Add error indicator and required indicator
export const TransferListField = ({
  type,
  name,
  value = [] as ChoiceValue[],
  iniValue = [],
  label,
  loading = false,
  disabled = false,
  // required = false,
  // placeholder = 'Select',
  properties = {},
  // error,
  onChange,
  // onBlur,
}: FieldProps): JSX.Element | null => {
  if (type !== FIELD_TYPE.TRANSFER_LIST) return null;
  if (!Array.isArray(value)) return null;

  const choices = getFieldChoices(properties) as TransferListItem[];

  return (
    <TransferList
      data-testid={name}
      label={label}
      disabled={disabled}
      loading={loading}
      choices={choices}
      defaultValue={iniValue as TransferListItemValue[]}
      onChange={onChange}
    />
  );
};
