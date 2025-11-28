import type { AppLanguages, AppThemeNames } from 'src/types/app.types';

export type AppState = {
  lang: AppLanguages;
  theme: AppThemeNames;
  /** Full app loader */
  loading: boolean;
  loadingMessage: string;

  setTheme: (newTheme: AppThemeNames) => void;
  setLang: (newLang: AppLanguages) => void;
  setLoading: (newLoading: boolean, message?: string) => void;
};
