import type { AppLanguages, AppThemeNames } from 'src/types/app.types';

import { useAppStore } from './appStore';

type SetAppLang = (newLang: AppLanguages) => void;
export const useSetAppLang = (): SetAppLang => {
  const { setState } = useAppStore;

  return (newLang: AppLanguages) => {
    setState({ lang: newLang });
  };
};

type SetAppTheme = (newLang: AppThemeNames) => void;
export const useSetAppTheme = (): SetAppTheme => {
  const { setState } = useAppStore;

  return (newTheme: AppThemeNames) => {
    setState({ theme: newTheme });
  };
};

type SetAppLoader = (newValue: boolean, message?: string) => void;
const useSetAppLoader = (): SetAppLoader => {
  const { setState } = useAppStore;

  return (val: boolean, message?: string) => {
    setState({ loading: val, loadingMessage: message });
  };
};

export const useShowAppLoader = (): ((message?: string) => void) => {
  const setAppLoader = useSetAppLoader();

  return (message?: string) => setAppLoader(true, message);
};

export const useHideAppLoader = (): VoidFunction => {
  const setAppLoader = useSetAppLoader();
  return () => setAppLoader(false);
};
