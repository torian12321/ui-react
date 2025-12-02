import type { JSX, SyntheticEvent } from 'react';
import { useEffect, useState } from 'react';
import MuiAutocomplete from '@mui/material/Autocomplete';
import MuiCircularProgress from '@mui/material/CircularProgress';

import { FIELD_TYPE } from 'src/components/FormRenderer/constants';

import { DropdownListItem as Item } from './DropdownField.Item';
import { loaderStyles } from './Fields.styles';
import type { Choice, ChoiceValue, FieldProps } from './Fields.types';
import { getFieldChoices, getSelectedChoice } from './Fields.utils';
import { SharedTextField } from './SharedTextField';

export const DropdownField = ({
  type,
  name,
  value,
  iniValue,
  label,
  loading = false,
  disabled = false,
  required = false,
  placeholder = 'Select',
  properties = {},
  error,
  onChange,
  onBlur,
}: FieldProps): JSX.Element | null => {
  // State to track if initial value has been set
  const [initialValueSet, setInitialValueSet] = useState(false);

  const choices = getFieldChoices(properties);
  const defalutValue = getSelectedChoice(
    choices,
    value as ChoiceValue,
    iniValue as ChoiceValue,
  );

  // Effect to set initial value after component mounts
  useEffect(() => {
    if (type === FIELD_TYPE.DROPDOWN && !initialValueSet && defalutValue) {
      onChange(defalutValue.value);
      setInitialValueSet(true);
    }
  }, [initialValueSet, defalutValue, onChange, choices, type]);

  if (type !== FIELD_TYPE.DROPDOWN) return null;

  const onChangeHandler = (_: SyntheticEvent, newValue?: Choice | null) => {
    if (newValue?.value) {
      onChange(newValue.value);
    } else {
      onChange(null);
    }
  };

  const isOptionEqualToValue = (option: Choice, val: Choice): boolean =>
    option.value === val.value;

  return (
    <>
      {loading && <MuiCircularProgress size={12} sx={loaderStyles} />}
      <MuiAutocomplete
        options={choices}
        onChange={onChangeHandler}
        onBlur={onBlur}
        isOptionEqualToValue={isOptionEqualToValue}
        loading={loading}
        disabled={disabled}
        value={defalutValue}
        // defaultValue={defalutValue} // removed defaultValue to fix the issue of not validating the field
        disableClearable={required}
        getOptionDisabled={({ disabled = false }: Choice) => Boolean(disabled)}
        ListboxComponent={Item}
        renderInput={params => (
          <SharedTextField
            {...params}
            placeholder={`-- ${placeholder} --`}
            name={name}
            label={label}
            error={error}
            value={value}
          />
        )}
      />
    </>
  );
};
