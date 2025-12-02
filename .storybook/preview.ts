import type {
  ArgTypes,
  Decorator,
  Parameters,
  Preview,
} from '@storybook/react-vite';

import { DEFAULT_LANGUAGE, DEFAULT_THEME } from '../src/constants';
import type { AppLanguages, AppThemeNames } from '../src/types';
import { DecoratorWithProvider } from './decorator-with-provider';

export const decorators: Decorator[] = [DecoratorWithProvider];

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const parameters: Parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Documentation',
        ['Introduction', '*'],
        'Components',
        ['Introduction', '*'],
        'FormRenderer',
        ['Introduction', '*'],
        'Layout',
        ['Introduction', '*'],
        'Views',
        ['Introduction', '*'],
        'Contexts',
        ['Introduction', '*'],
      ],
      locales: 'en-US',
    },
  },
};

type LangOption = { value: AppLanguages; title: string };
const langOptions: LangOption[] = [
  { value: 'en', title: 'English' },
  { value: 'es', title: 'Spanish' },
];

type ThemeOption = { value: AppThemeNames; title: string };
const themeOptions: ThemeOption[] = [
  { value: 'light', title: '⚪ Light' },
  { value: 'dark', title: '⚫ Dark' },
  { value: 'rws', title: '◻️ RWS' },
  { value: 'rwsDark', title: '◼️ RWS Dark' },
  { value: 'pink', title: '🩷 Pink' },
  { value: 'blue', title: '🔵 Blue' },
  { value: 'green', title: '🟢 Green' },
  { value: 'propylon', title: '♾️ Propylon' },
  { value: 'sc', title: '🌴 South Carolina' },
  { value: 'ny', title: '🗽 New York' },
];

export const globalTypes: ArgTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: DEFAULT_LANGUAGE,
    toolbar: {
      icon: 'globe',
      dynamicTitle: true,
      items: langOptions,
    },
  },
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: DEFAULT_THEME,
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: themeOptions,
    },
  },
};
