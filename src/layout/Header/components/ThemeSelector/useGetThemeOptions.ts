import { useMemo } from 'react';

import { isString } from '@torian12321/js-utils/typeChecker';

import { useLocalization } from 'src/localization';

import type { ThemeOptionDetails, ThemeOptions } from './ThemeSelector.types';

/**
 * A custom hook that transforms theme options into detailed theme options.
 *
 * @param {ThemeOptions[]} options - An array of theme options. Each option can be either a string or a ThemeOptionDetails object.
 * @returns {ThemeOptionDetails[]} An array of ThemeOptionDetails objects.
 */

export const useGetThemeOptions = (
  options: ThemeOptions[],
): ThemeOptionDetails[] => {
  const l10n = useLocalization();
  // const { options: themeNames } = l10n.layout.themeSelector;

  return useMemo(
    () =>
      options.map(op => {
        if (!isString(op)) return op;

        return {
          value: op,
          label: l10n(`layout.themeSelector.options.${op}`),
        };
      }),
    [options, l10n],
  );
};
