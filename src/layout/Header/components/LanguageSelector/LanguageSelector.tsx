import type { JSX } from 'react';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';

import { useSetAppLang } from 'src/contexts';
import { useLocalization } from 'src/localization';
import type { AppLanguages } from 'src/types';

import { OptionsSelector } from '../OptionsSelector';
import type { LanguageSelectorProps } from './LanguageSelector.types';
import { useGetLanguageOptions } from './useGetLanguageOptions';

export const LanguageSelector = ({
  'data-testid': dataTestid = 'language-selector',
  show = true,
  showIcon = true,
  options = ['en', 'es'],
  onChange = () => {},
}: LanguageSelectorProps): JSX.Element => {
  const l10n = useLocalization();
  const dropdownOptions = useGetLanguageOptions(options);

  const setLanguage = useSetAppLang();

  const handleOnChange = (val: AppLanguages) => {
    setLanguage(val);
    onChange(val);
  };

  return (
    <OptionsSelector
      data-testid={dataTestid}
      menuId='language-menu'
      label={l10n('layout.languageSelector.ariaLabel')}
      show={show}
      options={dropdownOptions}
      onChange={handleOnChange}
    >
      {showIcon && <LanguageSharpIcon />}
    </OptionsSelector>
  );
};
