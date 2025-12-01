import { describe, expect, it } from 'vitest';

import { getPartsArray } from './TextareaSearchable.utils';

describe('Components/TextareaSearchable/utils', () => {
  describe('getPartsArray', () => {
    it('should return an array with a single non-highlighted part when query is empty', () => {
      const result = getPartsArray('Hello, world!', '');
      expect(result).toEqual([{ text: 'Hello, world!', highlight: false }]);
    });

    it('should split text and highlight matching parts', () => {
      const result = getPartsArray('Hello, world! Hello, universe!', 'hello');
      expect(result).toEqual([
        { text: 'Hello', highlight: true },
        { text: ', world! ', highlight: false },
        { text: 'Hello', highlight: true },
        { text: ', universe!', highlight: false },
      ]);
    });

    it('should be case-insensitive by default', () => {
      const result = getPartsArray('HELLO, hello, HeLLo', 'hello');
      expect(result).toEqual([
        { text: 'HELLO', highlight: true },
        { text: ', ', highlight: false },
        { text: 'hello', highlight: true },
        { text: ', ', highlight: false },
        { text: 'HeLLo', highlight: true },
      ]);
    });

    describe('queryConfig options', () => {
      it('should allow case-sensitive search', () => {
        const result = getPartsArray('HELLO, hello, HeLLo', 'hello', {
          caseSensitive: true,
        });
        expect(result).toEqual([
          { text: 'HELLO, ', highlight: false },
          { text: 'hello', highlight: true },
          { text: ', HeLLo', highlight: false },
        ]);
      });

      it('should ignore whitespaces on search', () => {
        const result = getPartsArray(
          'Hello, world! And hello universe!',
          'hellouniverse',
          { ignoreWhitespaces: true },
        );
        expect(result).toEqual([
          { text: 'Hello, world! And ', highlight: false },
          { text: 'hello universe', highlight: true },
          { text: '!', highlight: false },
        ]);
      });
    });
  });
});
