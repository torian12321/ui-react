import { initReactI18next } from 'react-i18next';
import { cleanup } from '@testing-library/react';
import i18next from 'i18next';
import { afterAll, afterEach, beforeAll, beforeEach } from 'vitest';

import '@testing-library/jest-dom/vitest';

import localizationEn from './localization/en/localization.en';

beforeAll(() => {
  // Add your global beforeAll logics
});

beforeEach(() => {
  // Add your globalbeforeEach logics
});

afterAll(() => {
  // Add your global afterAll logics
});

afterEach(() => {
  // Cleanup DOM after each test
  cleanup();
  // Add your global afterEach logics
});

// Initialize i18next for tests
i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  resources: {
    en: {
      translations: localizationEn,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});
