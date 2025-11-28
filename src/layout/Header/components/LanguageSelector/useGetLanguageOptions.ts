import { useMemo } from 'react';

import { isString } from '@torian12321/js-utils/typeChecker';

import { useLocalization } from 'src/localization';

import type {
  LanguageOptionDetails,
  LanguageOptions,
} from './LanguageSelector.types';

/**
 * A custom hook that transforms language options into detailed language options.
 *
 * @param {LanguageOptions[]} options - An array of language options. Each option can be either a string or a LanguageOptionDetails object.
 * @returns {LanguageOptionDetails[]} An array of LanguageOptionDetails objects.
 */

export const useGetLanguageOptions = (
  options: LanguageOptions[],
): LanguageOptionDetails[] => {
  const l10n = useLocalization();

  return useMemo(
    () =>
      options.map(op => {
        if (!isString(op)) return op;

        return {
          value: op,
          label: l10n(`layout.languageSelector.options.${op}`),
        };
      }),
    [options, l10n],
  );
};
