import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { BurgerMenu } from './BurgerMenu';

describe('Layout/Header/HeaderBurgerMenu', () => {
  it('Should render correctly when `onClick` is provided', () => {
    const handleClick = vi.fn();
    render(<BurgerMenu onClick={handleClick} />);

    const button = screen.getByRole('button', { name: 'Toggle left pane' });
    expect(button).toBeTruthy();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('Should NOT render when `onClick` is not provided', () => {
    render(<BurgerMenu />);
    const button = screen.queryByRole('button');
    expect(button).toBeNull();
  });
});
