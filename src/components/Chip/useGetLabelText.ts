import { isBoolean } from '@torian12321/js-utils/typeChecker';

import { useLocalization } from 'src/localization';

import type { ChipLabel } from './Chip.types';

export const useGetLabelText = (label: ChipLabel): string => {
  const l10n = useLocalization();

  if (isBoolean(label)) {
    return label
      ? l10n('common.booleanOptions.yes')
      : l10n('common.booleanOptions.no');
  }

  return label.toString();
};
