import { useShallow } from 'zustand/shallow';

import type { AppLanguages, AppThemeNames } from 'src/types/app.types';

import { useAppStore } from './appStore';

export const useGetAppLang = (): AppLanguages =>
  useAppStore(useShallow(state => state.lang));

export const useGetAppTheme = (): AppThemeNames =>
  useAppStore(useShallow(state => state.theme));

export const useGetAppLoading = (): boolean =>
  useAppStore(useShallow(state => state.loading));

type UseGetLoadingDetails = {
  isLoading: boolean;
  message: string;
};
export const useGetLoadingDetails = (): UseGetLoadingDetails =>
  useAppStore(
    useShallow(state => ({
      isLoading: state.loading,
      message: state.loadingMessage,
    })),
  );
