import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useModal } from './useModal';

describe('Components/Modal/useModal', () => {
  it('should initialize with default value', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current[0]).toBe(false);
  });

  it('should initialize with custom default value', () => {
    const { result } = renderHook(() => useModal(true));

    expect(result.current[0]).toBe(true);
  });

  it('should handle `open` action', () => {
    const { result } = renderHook(() => useModal());

    act(() => result.current[1].open());
    expect(result.current[0]).toBe(true);
  });

  it('should handle `close` action', () => {
    const { result } = renderHook(() => useModal(true));

    act(() => result.current[1].close());
    expect(result.current[0]).toBe(false);
  });

  it('should handle `toggle` action', () => {
    const { result } = renderHook(() => useModal());

    act(() => result.current[1].toggle());
    expect(result.current[0]).toBe(true);

    act(() => result.current[1].toggle());
    expect(result.current[0]).toBe(false);
  });

  it('should handle `setVisibility` action', () => {
    const { result } = renderHook(() => useModal());

    act(() => result.current[1].setVisibility(true));
    expect(result.current[0]).toBe(true);

    act(() => result.current[1].setVisibility(false));
    expect(result.current[0]).toBe(false);
  });
});
