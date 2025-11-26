// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import { reactConfig } from '@torian12321/eslint-config';

export default [
  ...reactConfig,
  {
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  },
  {
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSEnumDeclaration',
          message: 'Avoid the use of enums',
        },
      ],
    },
  },
  ...storybook.configs['flat/recommended'],
];
