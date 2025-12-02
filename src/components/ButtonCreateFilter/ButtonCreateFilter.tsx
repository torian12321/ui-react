import type { JSX, RefObject } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import MuiBox from '@mui/material/Box';

import { useLocalization } from 'src/localization';
import { combineSxStyles } from 'src/utils';

import { CreateFilterButton } from './ButtonCreateFilter.Button';
import { Field } from './ButtonCreateFilter.Field';
import { wrapperStyles } from './ButtonCreateFilter.styles';
import type { ButtonCreateFilterProps } from './ButtonCreateFilter.types';
import { DATA_TEST } from './dataTest';

const DEFAULT_FILTER_NAME_MAX_LENGHT = 50;

/** @deprecated: Use ButtonCustomizations instead */
export const ButtonCreateFilter = ({
  'data-testid': dataTestid = DATA_TEST.ROOT,
  tooltip,
  errors = [],
  sx,
  maxFilterNameLenght = DEFAULT_FILTER_NAME_MAX_LENGHT,
  disabled = false,
  loading = false,
  onSubmit,
}: ButtonCreateFilterProps): JSX.Element => {
  const l10n = useLocalization();

  const [filterName, setFilterName] = useState('');
  const [showFilterTextField, setShowFilterTextField] = useState(false);
  const filterNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showFilterTextField) {
      filterNameRef.current?.focus();
    }
  }, [showFilterTextField]);

  const handleOnClickShow = () => {
    setShowFilterTextField(!showFilterTextField);
    setFilterName('');
  };

  const handleOnSubmit = async () => {
    const isSuccess = await onSubmit(filterName);

    if (isSuccess) {
      setFilterName('');
      setShowFilterTextField(false);
    }
  };

  /** Combine internal errors with custom errors */
  const errorsList = useMemo((): string[] => {
    const customError = errors;

    if (filterName.length > maxFilterNameLenght) {
      const infoMessages = l10n(
        'components.buttonCreateFilter.infoMessages.invalidNameLengtMax',
        { max: maxFilterNameLenght },
      );
      customError.push(infoMessages);
    }

    return customError;
  }, [errors, filterName.length, maxFilterNameLenght, l10n]);

  return (
    <MuiBox data-testid={dataTestid} sx={combineSxStyles(wrapperStyles, sx)}>
      {showFilterTextField && (
        <Field
          inputRef={filterNameRef as RefObject<HTMLInputElement>}
          value={filterName}
          errors={errorsList}
          isLoading={loading}
          onChange={setFilterName}
          onSave={handleOnSubmit}
        />
      )}
      <CreateFilterButton
        tooltipText={tooltip}
        disabled={disabled}
        loading={loading}
        onClick={handleOnClickShow}
      />
    </MuiBox>
  );
};
