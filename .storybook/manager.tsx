import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Torian12321 storybook',
    brandUrl: 'https://torian12321.com',
    brandImage: 'logo.png',
    brandTarget: '_self',

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    colorPrimary: '#8353fd',
    colorSecondary: '#3e016f',

    buttonBg: '#eeddff', //'#c39dff',
    buttonBorder: '#c39dff',

    booleanSelectedBg: '#c39dff',
    booleanBg: '#eeddff',

    // UI
    // appBg: '#ffffff',
    // appContentBg: '#ffffff',
    // appPreviewBg: '#ffffff',
    appBorderColor: '#f1edf5',
    appBorderRadius: 4,

    // Text colors
    textColor: '#10162F',
    // textInverseColor: '#ffffff',

    // Toolbar default and active colors
    // barTextColor: '#eeddff',
    barSelectedColor: '#3e016f',
    barHoverColor: '#3e016f',
    barBg: '#f3eef9', // '#eeddff',

    // Form colors
    // inputBg: '#ffffff',
    // inputBorder: '#10162F',
    // inputTextColor: '#10162F',
    // inputBorderRadius: 2,
  }),
});
