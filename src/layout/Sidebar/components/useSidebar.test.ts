import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useSidebar } from './useSidebar';

describe('Layout/Sidebar/useSidebar', () => {
  it('should initialize with the default value (true)', () => {
    const { result } = renderHook(() => useSidebar());
    const [isOpen] = result.current;
    expect(isOpen).toBe(true);
  });

  it('should initialize with the provided value (false)', () => {
    const { result } = renderHook(() => useSidebar(false));
    const [isOpen] = result.current;
    expect(isOpen).toBe(false);
  });

  it('should toggle the sidebar state', () => {
    const { result } = renderHook(() => useSidebar());
    const [, actions] = result.current;

    act(() => {
      actions.toggle();
    });

    const [isOpen] = result.current;
    expect(isOpen).toBe(false);
  });

  it('should open the sidebar', () => {
    const { result } = renderHook(() => useSidebar(false));
    const [, actions] = result.current;

    act(() => {
      actions.open();
    });

    const [isOpen] = result.current;
    expect(isOpen).toBe(true);
  });

  it('should close the sidebar', () => {
    const { result } = renderHook(() => useSidebar(true));
    const [, actions] = result.current;

    act(() => {
      actions.close();
    });

    const [isOpen] = result.current;
    expect(isOpen).toBe(false);
  });

  it('should update the state when the value prop changes', () => {
    const { result, rerender } = renderHook(({ value }) => useSidebar(value), {
      initialProps: { value: true },
    });

    rerender({ value: false });

    const [isOpen] = result.current;
    expect(isOpen).toBe(false);
  });
});
