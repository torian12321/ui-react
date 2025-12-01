import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import type { IconButtonAction } from './IconButtonGroup.types';
import { useSortActions } from './useSortActions';

const mockActions: IconButtonAction[] = [
  { id: '1', label: 'Action 1', onClick: vi.fn(), inMenu: false },
  { id: '2', label: 'Action 2', onClick: vi.fn(), inMenu: true },
  { id: '3', label: 'Action 3', onClick: vi.fn(), inMenu: false },
  { id: '4', label: 'Action 4', onClick: vi.fn(), inMenu: false },
  { id: '5', label: 'Action 5', onClick: vi.fn(), inMenu: true },
];

describe('Components/IconButtonGroup/useSortActions', () => {
  it('should correctly sort actions into inlined and inmenu', () => {
    const { result } = renderHook(() => useSortActions(mockActions, 2));

    expect(result.current.inlined).toHaveLength(2);
    expect(result.current.inmenu).toHaveLength(3);

    expect(result.current.inlined[0].id).toBe('1');
    expect(result.current.inlined[1].id).toBe('3');

    expect(result.current.inmenu[0].id).toBe('2');
    expect(result.current.inmenu[1].id).toBe('5');
    expect(result.current.inmenu[2].id).toBe('4');
  });

  it('should handle case when maxInlined is greater than available actions', () => {
    const { result } = renderHook(() => useSortActions(mockActions, 10));

    expect(result.current.inlined).toHaveLength(3);
    expect(result.current.inmenu).toHaveLength(2);

    expect(result.current.inlined[0].id).toBe('1');
    expect(result.current.inlined[1].id).toBe('3');
    expect(result.current.inlined[2].id).toBe('4');

    expect(result.current.inmenu[0].id).toBe('2');
    expect(result.current.inmenu[1].id).toBe('5');
  });

  it('should handle empty actions array', () => {
    const { result } = renderHook(() => useSortActions([], 2));

    expect(result.current.inlined).toHaveLength(0);
    expect(result.current.inmenu).toHaveLength(0);
  });
});
