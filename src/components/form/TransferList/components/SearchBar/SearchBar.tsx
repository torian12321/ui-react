import type { JSX } from 'react';
import { useRef } from 'react';
import MuiCloseIcon from '@mui/icons-material/Close';
import MuiSearchIcon from '@mui/icons-material/Search';
import MuiBox from '@mui/material/Box';
import MuiIconButton from '@mui/material/IconButton';

import { Tooltip } from 'src/components';
import { useLocalization } from 'src/localization';

import { dividerStyles, inputStyles, wrapperStyles } from './SearchBar.styles';
import type { SearchBarProps } from './SearchBar.types';

export const SearchBar = ({
  value,
  onChange,
}: SearchBarProps): JSX.Element | null => {
  const fieldRef = useRef<HTMLInputElement>(null);
  const l10n = useLocalization();
  const hasQuery = Boolean(value);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleOnSearch = () => {
    fieldRef.current?.focus();
  };

  const handleOnClear = () => {
    onChange('');
    fieldRef.current?.focus();
  };

  return (
    <MuiBox data-testid='search-bar' sx={wrapperStyles}>
      <Tooltip title={l10n('common.actions.filter')}>
        <MuiIconButton
          size='small'
          aria-label={l10n('common.actions.filter')}
          onClick={handleOnSearch}
        >
          <MuiSearchIcon fontSize='small' />
        </MuiIconButton>
      </Tooltip>

      <MuiBox sx={dividerStyles} />

      <MuiBox
        ref={fieldRef}
        component='input'
        type='text'
        placeholder={l10n('components.transferList.input.placeholder')}
        aria-label={l10n('common.actions.filter')}
        sx={inputStyles}
        value={value}
        onChange={handleOnChange}
      />

      {hasQuery && (
        <Tooltip title={l10n('common.actions.clear')}>
          <MuiIconButton
            size='small'
            aria-label={l10n('common.actions.clear')}
            disabled={!value}
            onClick={handleOnClear}
          >
            <MuiCloseIcon fontSize='small' />
          </MuiIconButton>
        </Tooltip>
      )}
    </MuiBox>
  );
};
