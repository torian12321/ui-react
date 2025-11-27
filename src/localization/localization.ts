import { getI18n, useTranslation } from 'react-i18next';

import type { LocalizationKey } from 'src/localization';
import type { AppLanguages } from 'src/types';

/** Components using this hook will automatically re-render when the language changes */
export const useLocalization = () => {
  const { t } = useTranslation();

  return t;
};

/** Components using this function won't automatically re-render when the language changes */
export const localization = (
  key: LocalizationKey,
  options?: Record<string, unknown>,
): string => getI18n().t(key, options);

export const setLanguage = (language: AppLanguages): void => {
  getI18n().changeLanguage(language);
};
