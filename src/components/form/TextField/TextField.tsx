import type { ChangeEvent, JSX, Ref } from 'react';
import { forwardRef } from 'react';
import MuiBox from '@mui/material/Box';

import { combineSxStyles } from 'src/utils';

import { textFieldStyles } from './TextField.styles';
import type { TextFieldProps } from './TextField.types';

export const TextField = forwardRef(
  <FieldName extends string>(
    {
      name,
      placeholder,
      value,
      sx = {},
      disabled = false,
      onChange,
      onKeyDown,
      onPressEnter,
    }: TextFieldProps<FieldName>,
    ref: Ref<HTMLInputElement>,
  ): JSX.Element => {
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (!disabled && onChange) {
        onChange(e.target.value, e);
      }
    };

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (onKeyDown) {
        onKeyDown(e);
      }
      if (onPressEnter && e.key === 'Enter') {
        onPressEnter();
      }
    };

    return (
      <MuiBox
        ref={ref}
        component='input'
        autoComplete='off'
        data-testid={name}
        name={name}
        value={value}
        sx={combineSxStyles(textFieldStyles, sx)}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />
    );
  },
) as <FieldName extends string>(
  props: TextFieldProps<FieldName> & { ref?: React.Ref<HTMLInputElement> },
) => JSX.Element;
