import type { JSX } from 'react';
import MuiAlert from '@mui/material/Alert';

import { FIELD_TYPE } from 'src/components/FormRenderer/constants';

import { InfoMessageBody, InfoMessageTitle } from './Fields.styles';
import type { FieldProps } from './Fields.types';

export const InfoMessage = ({
  type,
  label,
  placeholder,
  severity = 'info',
}: FieldProps): JSX.Element | null => {
  if (type !== FIELD_TYPE.INFO_MESSAGE) return null;

  return (
    <MuiAlert severity={severity} icon={false}>
      {label && (
        <InfoMessageTitle>
          <strong>{label}</strong>
        </InfoMessageTitle>
      )}
      {placeholder && <InfoMessageBody>{placeholder}</InfoMessageBody>}
    </MuiAlert>
  );
};
