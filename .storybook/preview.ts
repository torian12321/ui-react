import type { Parameters, Preview } from '@storybook/react-vite';

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
        'Components',
        ['Introduction', '*'],
        'Layout',
        'Views',
        'Contexts',
      ],
      locales: 'en-US',
    },
  },
};
