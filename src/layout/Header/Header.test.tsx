import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Header } from './Header';

const getHeader = () =>
  screen.getByRole('banner', {
    name: /app header/i,
  });

describe('Layout/Header', () => {
  it('Should render', () => {
    render(<Header />);

    expect(getHeader()).toBeInTheDocument();
  });

  it('Should render correctly with `onClickMenuOpener`', () => {
    const handleClick = vi.fn();
    render(
      <Header title='Test Title' onClickMenuOpener={handleClick}>
        <div>Child Content</div>
      </Header>,
    );

    // Check if the BurgerMenu button is rendered and clickable
    const burgerButton = screen.getByRole('button', {
      name: 'Toggle left pane',
    });
    fireEvent.click(burgerButton);
    expect(handleClick).toHaveBeenCalled();

    // Check if title and children are rendered correctly
    expect(screen.getByText('Test Title')).toBeTruthy();
    expect(screen.getByText('Child Content')).toBeTruthy();
  });

  it('Should render correctly without `onClickMenuOpener`', () => {
    render(
      <Header title='Test Title'>
        <div>Child Content</div>
      </Header>,
    );

    // Check if the BurgerMenu button is not rendered
    const burgerButton = screen.queryByRole('button', {
      name: 'Toggle left pane',
    });
    expect(burgerButton).toBeNull();

    // Check if title and children are rendered correctly
    expect(screen.getByText('Test Title')).toBeTruthy();
    expect(screen.getByText('Child Content')).toBeTruthy();
  });

  describe('prop data-testid', () => {
    it('Should render with default value', () => {
      render(
        <Header title='Test Title'>
          <div>Child Content</div>
        </Header>,
      );

      expect(screen.getByTestId('app-header')).toBeInTheDocument();
    });

    it('Should render with prop value', () => {
      render(<Header data-testid='my-custom-header-id' />);

      expect(screen.getByTestId('my-custom-header-id')).toBeInTheDocument();
    });
  });
});
