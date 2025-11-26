import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, beforeEach } from 'vitest';

import '@testing-library/jest-dom/vitest';

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
