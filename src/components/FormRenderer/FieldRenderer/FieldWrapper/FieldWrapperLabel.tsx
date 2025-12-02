import InfoIcon from '@mui/icons-material/Info';

import { Tooltip } from 'src/components';

import {
  Label,
  LabelAsterisk,
  LabelText,
  LabelTooltipWrapper,
} from './FieldWrapper.styles';
import type { LabelProps } from './FieldWrapper.types';

export const FieldLabel = ({
  label = '',
  name = '',
  infoMessage,
  required = false,
}: LabelProps) => (
  <Label htmlFor={name}>
    <LabelText>
      {label}
      {required && <LabelAsterisk />}
    </LabelText>
    {infoMessage && (
      <LabelTooltipWrapper>
        <Tooltip title={infoMessage}>
          <InfoIcon />
        </Tooltip>
      </LabelTooltipWrapper>
    )}
  </Label>
);
