import type { JSX, SyntheticEvent } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import MuiAutocomplete, {
  createFilterOptions,
} from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import MuiCircularProgress from '@mui/material/CircularProgress';

import { FIELD_TYPE } from '../../FormRenderer.constants';
import { SharedTextField } from './SharedTextField/SharedTextField';
import { loaderStyles } from './Fields.styles';
import { Choice, ChoiceValue, FieldProps } from './Fields.types';
import { getFieldChoices, getSelectedChoices } from './Fields.utils';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

// Render a maximum of 100 results when open to avoid performance issues
// All options are still available when querying
const filterOptions = createFilterOptions<Choice>({
  limit: 100,
});

export const DropdownMultiField = ({
  type,
  name,
  value,
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
  if (type !== FIELD_TYPE.DROPDOWN) return null;

  const choices = getFieldChoices(properties);
  const defalutValue = getSelectedChoices(choices, value as ChoiceValue[]);

  const isOptionEqualToValue = (option: Choice, val: Choice): boolean =>
    option.value === val.value;

  const onChangeHandler = (_: SyntheticEvent, newValue: Choice[] = []) => {
    onChange(newValue.map(option => option.value));
  };

  return (
    <>
      {loading && <MuiCircularProgress size={12} sx={loaderStyles} />}
      <MuiAutocomplete
        multiple
        options={choices}
        filterOptions={filterOptions}
        disableCloseOnSelect
        loading={loading}
        disabled={disabled}
        value={defalutValue}
        defaultValue={defalutValue}
        disableClearable={required}
        getOptionDisabled={({ disabled = false }: Choice) => Boolean(disabled)}
        onChange={onChangeHandler}
        isOptionEqualToValue={isOptionEqualToValue}
        onBlur={onBlur}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              sx={{ marginRight: '8px' }}
              checked={selected}
            />
            {option.label}
          </li>
        )}
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
