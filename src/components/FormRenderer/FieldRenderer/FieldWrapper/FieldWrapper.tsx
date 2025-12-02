import type { JSX, PropsWithChildren } from 'react';
import MuiBox from '@mui/material/Box';
import { useGetFieldData } from 'formRenderer/contexts/FormDataContext';
import { useGetFieldStyles } from 'formRenderer/contexts/FormStylesContext';

import { FieldBox, FieldContainer, Wrapper } from './FieldWrapper.styles';
import type { FieldWrapperProps } from './FieldWrapper.types';
import { HelperText } from './FieldWrapperHelperText';
import { FieldLabel } from './FieldWrapperLabel';

export const FieldWrapper = ({
  children,
  name = '',
  showLabel = true,
}: PropsWithChildren<FieldWrapperProps>): JSX.Element | null => {
  const { sxStyles, inlineDisplay } = useGetFieldStyles(name);
  const fieldData = useGetFieldData(name);

  if (!fieldData) return null;

  const { label, infoMessage, messages, isRequired, readOnly } = fieldData;
  const hasLabel = label && showLabel;

  return (
    <Wrapper sx={sxStyles}>
      <FieldContainer inlineDisplay={inlineDisplay}>
        {hasLabel && (
          <FieldLabel
            name={name}
            label={label}
            infoMessage={infoMessage}
            required={isRequired && !readOnly}
          />
        )}
        <FieldBox>
          <MuiBox>{children}</MuiBox>
          <HelperText
            messages={messages}
            showMessages={fieldData?.showErrors}
          />
        </FieldBox>
      </FieldContainer>
    </Wrapper>
  );
};
