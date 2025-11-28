import { initReactI18next } from 'react-i18next';
import { cleanup } from '@testing-library/react';
import i18next from 'i18next';
import { afterAll, afterEach, beforeAll, beforeEach, vi } from 'vitest';

import '@testing-library/jest-dom/vitest';

import { I18N_NAMESPACE } from 'src/constants';
import localizationEn from 'src/localization/en/localization.en';

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
  ns: [I18N_NAMESPACE],
  defaultNS: I18N_NAMESPACE,
  resources: {
    en: {
      [I18N_NAMESPACE]: localizationEn,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

// Mock notistack
vi.mock('notistack', () => ({
  enqueueSnackbar: vi.fn(),
  VariantType: {
    default: 'default',
    error: 'error',
    success: 'success',
    warning: 'warning',
    info: 'info',
  },
}));
