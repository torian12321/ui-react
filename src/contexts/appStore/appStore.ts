import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

import { DEFAULT_LANGUAGE, DEFAULT_THEME } from 'src/constants';
import type { AppLanguages, AppThemeNames } from 'src/types';

import type { AppState } from './appStore.types';

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      set => ({
        lang: DEFAULT_LANGUAGE,
        theme: DEFAULT_THEME,
        loading: false,
        loadingMessage: '',

        setLang: (newLang: AppLanguages) => set({ lang: newLang }),
        setTheme: (newTheme: AppThemeNames) => set({ theme: newTheme }),
        setLoading: (val: boolean, message: string = '') =>
          set({ loading: val, loadingMessage: message }),
      }),
      {
        // Persist on LocalStorage `lang` and `theme` values
        name: 'app-storage',
        storage: createJSONStorage(() => localStorage),
        partialize: state =>
          Object.fromEntries(
            Object.entries(state).filter(([key]) =>
              ['lang', 'theme'].includes(key),
            ),
          ),
      },
    ),
    {
      // Enable devtools only in development mode
      name: 'appStore',
      enabled: process.env.NODE_ENV !== 'production',
    },
  ),
);
