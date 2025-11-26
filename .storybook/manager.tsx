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

    // colorPrimary: '#3e016f',
    // colorSecondary: '#e60054',
    // colorSecondary: '#cccccc',

    // buttonBg: '#e60054', //'#ffffff',
    // buttonBorder: '#e60054', //'#ffffff',
    buttonBg: '#ffffff',
    buttonBorder: '#ffffff',
    booleanBg: '#e3dbf5',
    // booleanSelectedBg: '#8151f9',
    textInverseColor: '#00ff00',

    // UI
    // appBg: '#ffffff',
    // appContentBg: '#ffffff',
    // appPreviewBg: '#ffffff',
    // appBorderColor: '#3e016f',
    // appBorderRadius: 4,

    // Text colors
    textColor: '#10162F',
    // textInverseColor: '#ffffff',

    // Toolbar default and active colors
    barTextColor: '#eeddff',
    barSelectedColor: '#ffffff',
    barHoverColor: '#ffffff',
    // barBg: '#8151f9',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#10162F',
    inputTextColor: '#10162F',
    inputBorderRadius: 2,
  }),
});
