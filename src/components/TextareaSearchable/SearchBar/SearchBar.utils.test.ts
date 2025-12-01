import { describe, expect, it } from 'vitest';

import { getMatchesPagination } from './SearchBar.utils';

describe('Components/TextAreaSearchable/SearchBar/utils', () => {
  describe('getMatchesPagination', () => {
    it('should return correct pagination string', () => {
      expect(getMatchesPagination(5, 0)).toBe('1/5');
      expect(getMatchesPagination(10, 5)).toBe('6/10');
      expect(getMatchesPagination(3)).toBe('0/3');
      expect(getMatchesPagination(3, undefined)).toBe('0/3');
      expect(getMatchesPagination(0)).toBe('0/0');
      expect(getMatchesPagination()).toBe('0/0');
      expect(getMatchesPagination(undefined, undefined)).toBe('0/0');
    });
  });
});
