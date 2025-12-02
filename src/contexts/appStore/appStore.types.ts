import type { AppLanguages, AppThemeNames } from 'src/types';

export type AppState = {
  lang: AppLanguages;
  theme: AppThemeNames;

  /** Layout state */
  sidebarOpen: boolean;

  /** Full app loader */
  loading: boolean;
  loadingMessage: string;

  setTheme: (newTheme: AppThemeNames) => void;
  setLang: (newLang: AppLanguages) => void;
  setSidebarOpen: (newState: boolean) => void;
  setLoading: (newLoading: boolean, message?: string) => void;
};
