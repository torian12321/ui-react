import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useSidebar } from './useSidebar';

describe('Layout/Sidebar/useSidebar', () => {
  it('should initialize with the default value (true)', () => {
    const { result } = renderHook(() => useSidebar());
    const { isOpen } = result.current;
    expect(isOpen).toBe(true);
  });

  it('should toggle the sidebar state', () => {
    const { result } = renderHook(() => useSidebar());
    const { toggle } = result.current;

    act(() => {
      toggle();
    });

    const { isOpen } = result.current;
    expect(isOpen).toBe(false);
  });

  it('should open the sidebar', () => {
    const { result } = renderHook(() => useSidebar());
    const { open } = result.current;

    act(() => {
      open();
    });

    const { isOpen } = result.current;
    expect(isOpen).toBe(true);
  });

  it('should close the sidebar', () => {
    const { result } = renderHook(() => useSidebar());
    const { close } = result.current;

    act(() => {
      close();
    });

    const { isOpen } = result.current;
    expect(isOpen).toBe(false);
  });

  it('should update the state when the value prop changes', () => {
    const { result, rerender } = renderHook(() => useSidebar());

    rerender();

    const { isOpen } = result.current;
    expect(isOpen).toBe(false);
  });
});
