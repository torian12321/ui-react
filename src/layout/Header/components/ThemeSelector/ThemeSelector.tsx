import type { JSX } from 'react';
import ContrastIcon from '@mui/icons-material/Contrast';

import { useSetAppTheme } from 'src/contexts';
import { useLocalization } from 'src/localization';
import type { AppThemeNames } from 'src/types/app.types';

import { OptionsSelector } from '../OptionsSelector';
import type { ThemeSelectorProps } from './ThemeSelector.types';
import { useGetThemeOptions } from './useGetThemeOptions';

export const ThemeSelector = ({
  'data-testid': dataTestid = 'theme-selector',
  show = true,
  showIcon = true,
  options = ['light', 'dark'],
  onChange = () => {},
}: ThemeSelectorProps): JSX.Element => {
  const l10n = useLocalization();
  const dropdownOptions = useGetThemeOptions(options);

  const setTheme = useSetAppTheme();

  const handleOnChange = (val: AppThemeNames) => {
    setTheme(val);
    onChange(val);
  };

  return (
    <OptionsSelector
      data-testid={dataTestid}
      menuId='theme-menu'
      label={l10n('layout.themeSelector.ariaLabel')}
      show={show}
      options={dropdownOptions}
      onChange={handleOnChange}
    >
      {showIcon && <ContrastIcon />}
    </OptionsSelector>
  );
};
