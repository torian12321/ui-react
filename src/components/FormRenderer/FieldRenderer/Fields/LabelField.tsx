import MuiTypography from '@mui/material/Typography';

import { FIELD_TYPE } from '../../FormRenderer.constants';
import { labelFieldStyles } from './Fields.styles';
import { FieldProps } from './Fields.types';
import { getCustomLabel } from './Fields.utils';

export const LabelField = ({ type, label, properties = {} }: FieldProps) => {
  if (type !== FIELD_TYPE.LABEL) return null;

  const customLabel = getCustomLabel(properties) ?? label;

  return <MuiTypography sx={labelFieldStyles}>{customLabel}</MuiTypography>;
};
