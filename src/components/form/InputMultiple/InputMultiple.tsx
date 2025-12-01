import type { JSX } from 'react';
import { Fragment } from 'react';
import MuiBox from '@mui/material/Box';

import { LabeledContent, TextField } from 'src/components';

import { dividerStyles, fieldsWrapperStyles } from './InputMultiple.styles';
import type { InputMultipleProps } from './InputMultiple.types';

export const InputMultiple = <FieldName extends string>({
  'data-testid': dataTestid,
  inputs = [],
  value,
  label,
  sx,
  disabled = false,
  onChange,
  onKeyDown,
}: InputMultipleProps<FieldName>): JSX.Element => {
  const handleOnChange = (fieldName: FieldName, fieldValue: string) => {
    if (!disabled && onChange) {
      if (value[fieldName] !== fieldValue) {
        onChange({ ...value, [fieldName]: fieldValue });
      }
    }
  };

  const inputsFormatted = inputs.map(input => ({
    ...input,
    value: value[input?.name ?? ''],
    disabled: disabled ?? input?.disabled,
    onChange: (value: string) => handleOnChange(input?.name, value),
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) =>
      onKeyDown?.(e, input?.name),
  }));

  return (
    <LabeledContent label={label} sx={sx}>
      <MuiBox data-testid={dataTestid} component='div' sx={fieldsWrapperStyles}>
        {inputsFormatted.map((input, index) => (
          <Fragment key={index}>
            <TextField sx={{ flexGrow: 1 }} key={index} {...input} />
            {
              /* Add divider between inputs */
              index < inputs.length - 1 && (
                <MuiBox component='div' sx={dividerStyles} />
              )
            }
          </Fragment>
        ))}
      </MuiBox>
    </LabeledContent>
  );
};
