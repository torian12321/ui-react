import type { JSX } from 'react';

import { FIELD_TYPE } from 'src/components/FormRenderer/constants';

import type { FieldProps } from './Fields.types';
import { SharedTextField } from './SharedTextField';

export const LongTextField = ({
  iniValue: _iniValue,
  // `validate` and `iniValue` added here to avoid to have it on `rest` and pass it down to `<SharedTextField />`
  ...rest
}: FieldProps): JSX.Element | null => {
  if (rest.type !== FIELD_TYPE.LONG_TEXT) return null;

  return <SharedTextField {...rest} rows={3} />;
};
