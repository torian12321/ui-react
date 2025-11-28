import { describe, expect, it } from 'vitest';

import { getAvatarText } from './getAvatarText';

describe('Layout/Header/AccountManager/getAvatarText', () => {
  it('Should return an empty string if no name is provided', () => {
    expect(getAvatarText()).toBe('');
    expect(getAvatarText('')).toBe('');
  });

  it('Should return a single character if a single name is provided', () => {
    expect(getAvatarText('John')).toBe('J');
  });

  it('Should return a single character if a single name is provided', () => {
    expect(getAvatarText('John Doe')).toBe('JD');
  });

  it('Should return a maximum of 2 characters', () => {
    expect(getAvatarText('John Doe Smith')).toBe('JD');
    expect(getAvatarText('John Doe Smith Large Name')).toBe('JD');
  });
});
