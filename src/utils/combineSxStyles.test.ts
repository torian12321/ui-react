import { describe, expect, it } from 'vitest';

import { combineSxStyles } from './combineSxStyles';

describe('utils/combineSxStyles', () => {
  it('should combine multiple style objects', () => {
    const style1 = { color: 'blue' };
    const style2 = { backgroundColor: 'red' };
    const result = combineSxStyles(style1, style2);

    expect(result).toEqual({ color: 'blue', backgroundColor: 'red' });
  });

  it('should handle undefined values gracefully', () => {
    const style1 = { color: 'blue' };
    const result = combineSxStyles(style1, undefined);

    expect(result).toEqual({ color: 'blue' });
  });

  it('should combine nested arrays of styles', () => {
    const style1 = { color: 'blue' };
    const style2 = [{ backgroundColor: 'red' }, { fontSize: '16px' }];
    const style3 = { margin: '10px' };
    const result = combineSxStyles(style1, style2, style3);

    expect(result).toEqual({
      color: 'blue',
      backgroundColor: 'red',
      fontSize: '16px',
      margin: '10px',
    });
  });

  it('should override properties from left to right', () => {
    const style1 = { color: 'blue', margin: '5px' };
    const style2 = { color: 'red', padding: '10px' };
    const result = combineSxStyles(style1, style2);

    expect(result).toEqual({ color: 'red', margin: '5px', padding: '10px' });
  });
});
