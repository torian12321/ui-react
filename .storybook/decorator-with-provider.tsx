import { useEffect } from 'react';
import type { Decorator } from '@storybook/react-vite';

import { Provider } from '../src/contexts';
import { useSetAppLang, useSetAppTheme } from '../src/contexts/appStore';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const DecoratorWithProvider: Decorator = (Story, context) => {
  // Get globals from storybook header options to use in the story
  const { locale, theme } = context.globals;
  const setLang = useSetAppLang();
  const setTheme = useSetAppTheme();

  useEffect(() => {
    setLang(locale);
  }, [locale, setLang]);

  useEffect(() => {
    setTheme(theme);
  }, [theme, setTheme]);

  return (
    <Provider>
      <Story />
    </Provider>
  );
};
