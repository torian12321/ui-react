import type { ChangeEvent, JSX, KeyboardEvent } from 'react';
import { useRef } from 'react';
import MuiCloseIcon from '@mui/icons-material/Close';
import MuiSearchIcon from '@mui/icons-material/Search';
import MuiSyncIcon from '@mui/icons-material/Sync';
import MuiBox from '@mui/material/Box';
import MuiDivider from '@mui/material/Divider';
import MuiInputBase from '@mui/material/InputBase';

import { useLocalization } from 'src/localization';
import { useCombineSxStyles } from 'src/utils';

import { Icon } from './SearchBar.Icon';
import { dividerStyles, inputStyles, wrapperStyles } from './SearchBar.styles';
import type { SearchBarProps } from './SearchBar.types';

/**

 * SearchBar component to be used on subHeader
 * Used to filter data on Dashboard Datagrid
 */
export const SearchBar = ({
  'data-testid': dataTestid = 'search-bar',
  value = '',
  placeholder,
  sx,
  disabled = false,
  onChange,
  onSearch,
  onClear,
  onSync,
}: SearchBarProps): JSX.Element => {
  const fieldRef = useRef<HTMLInputElement>(null);
  const sxWrapper = useCombineSxStyles(wrapperStyles, sx);
  const l10n = useLocalization();
  const placeholderText = placeholder ?? l10n('common.actions.search');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value || '');
  };

  const handleOnKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (event.key === 'Enter') {
      onSearch(value);
    }
  };

  const handleOnClear = () => {
    onChange('');
    fieldRef.current?.focus();

    onClear?.();
  };

  const handleOnSearch = () => {
    onSearch(value);
  };

  return (
    <MuiBox
      data-testid={dataTestid}
      sx={sxWrapper}
      /* Add a class if the value is not empty to show bigger width */
      className={value ? 'has-value' : ''}
    >
      <Icon
        icon={MuiSearchIcon}
        title={l10n('common.actions.search')}
        onClick={handleOnSearch}
      />

      <MuiInputBase
        inputRef={fieldRef}
        sx={inputStyles}
        placeholder={placeholderText}
        inputProps={{ 'aria-label': placeholderText }}
        value={value}
        disabled={disabled}
        onChange={handleOnChange}
        onKeyUp={handleOnKeyUp}
      />

      <Icon
        icon={MuiCloseIcon}
        title={l10n('common.actions.clear')}
        show={value !== ''}
        onClick={handleOnClear}
      />

      {onSync && (
        <>
          <MuiDivider sx={dividerStyles} orientation='vertical' />
          <Icon
            icon={MuiSyncIcon}
            title={l10n('common.actions.sync')}
            show={!!onSync}
            onClick={onSync}
          />
        </>
      )}
    </MuiBox>
  );
};
