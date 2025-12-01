import type { JSX } from 'react';
import { useRef } from 'react';
import MuiCloseIcon from '@mui/icons-material/Close';
import MuiKeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MuiKeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MuiSearchIcon from '@mui/icons-material/Search';
import MuiBox from '@mui/material/Box';
import MuiIconButton from '@mui/material/IconButton';

import { Tooltip } from 'src/components';
import { useLocalization } from 'src/localization';

import {
  dividerStyles,
  inputStyles,
  optionsSectionStyles,
  wordCounterStyles,
  wrapperStyles,
} from './SearchBar.styles';
import type { SearchBarProps } from './SearchBar.types';
import { getMatchesPagination } from './SearchBar.utils';

export const SearchBar = ({
  value,
  totalMatches = 0,
  activeMatchIndex = undefined,
  onGoToMatch,
  onChange,
}: SearchBarProps): JSX.Element | null => {
  const fieldRef = useRef<HTMLInputElement>(null);
  const l10n = useLocalization();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  const handleOnKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleOnGoNext();
    }
  };

  const handleOnSearch = () => {
    fieldRef.current?.focus();
  };

  const handleOnGoPrev = () => {
    const newIndex = activeMatchIndex ?? 0;
    onGoToMatch(newIndex - 1);
  };

  const handleOnGoNext = () => {
    if (activeMatchIndex === undefined) {
      onGoToMatch(0);
      return;
    }

    onGoToMatch(activeMatchIndex + 1);
  };
  const handleOnClear = () => {
    onChange('');
    fieldRef.current?.focus();
  };

  return (
    <MuiBox data-testid='search-bar' sx={wrapperStyles}>
      <Tooltip title={l10n('components.textAreaSearchable.input.search')}>
        <MuiIconButton
          size='small'
          aria-label={l10n('components.textAreaSearchable.input.search')}
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
        placeholder={l10n('components.textAreaSearchable.input.placeholder')}
        aria-label={l10n('components.textAreaSearchable.input.search')}
        sx={inputStyles}
        value={value}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyPress}
      />

      {value && (
        <MuiBox sx={wordCounterStyles}>
          {getMatchesPagination(totalMatches, activeMatchIndex)}
        </MuiBox>
      )}
      <MuiBox sx={dividerStyles} />

      <MuiBox sx={optionsSectionStyles}>
        <Tooltip title={l10n('components.textAreaSearchable.input.prev')}>
          <MuiIconButton
            size='small'
            aria-label={l10n('components.textAreaSearchable.input.prev')}
            disabled={!totalMatches}
            onClick={handleOnGoPrev}
          >
            <MuiKeyboardArrowUpIcon fontSize='small' />
          </MuiIconButton>
        </Tooltip>
        <Tooltip title={l10n('components.textAreaSearchable.input.next')}>
          <MuiIconButton
            size='small'
            aria-label={l10n('components.textAreaSearchable.input.next')}
            disabled={!totalMatches}
            onClick={handleOnGoNext}
          >
            <MuiKeyboardArrowDownIcon fontSize='small' />
          </MuiIconButton>
        </Tooltip>
        <Tooltip title={l10n('components.textAreaSearchable.input.clear')}>
          <MuiIconButton
            size='small'
            aria-label={l10n('components.textAreaSearchable.input.clear')}
            disabled={!value}
            onClick={handleOnClear}
          >
            <MuiCloseIcon fontSize='small' />
          </MuiIconButton>
        </Tooltip>
      </MuiBox>
    </MuiBox>
  );
};
