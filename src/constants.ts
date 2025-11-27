import type { AppLanguages, AppThemeNames } from 'src/types';

export const DEFAULT_THEME: AppThemeNames = 'light';
export const DEFAULT_LANGUAGE: AppLanguages = 'en';

/** Language for spell check */
export const SPELL_CHECK_LANGUAGE = 'en';

/**
 * Namespace for i18next to avoid conflicts with consuming applications
 * https://www.i18next.com/principles/namespaces
 */
export const I18N_NAMESPACE = 'torian-ui';
