import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { AccountManager } from './AccountManager';

const toggleMenu = () =>
  fireEvent.click(screen.getByTestId('account-manager-btn'));

describe('Layout/Header/AccountManager', () => {
  it('Should render without crashing', () => {
    render(<AccountManager userName='John Doe' onLogout={vi.fn()} />);

    expect(screen.getByTestId('account-manager-btn')).toBeInTheDocument();
  });

  it('Should open menu on button click', () => {
    render(<AccountManager userName='John Doe' onLogout={vi.fn()} />);

    toggleMenu();

    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('Should call `onLogout` when logout is clicked', () => {
    const onLogout = vi.fn();
    render(<AccountManager userName='John Doe' onLogout={onLogout} />);

    toggleMenu();
    fireEvent.click(screen.getByText('Logout'));

    expect(onLogout).toHaveBeenCalled();
  });

  it('Should show custom actions', () => {
    render(
      <AccountManager
        userName='John Doe'
        onLogout={vi.fn()}
        actions={[
          { label: 'Settings', onClick: vi.fn() },
          { label: 'Options', onClick: vi.fn() },
        ]}
      />,
    );

    toggleMenu();

    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Options')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  describe('prop data-testid', () => {
    it('Should render with default value', () => {
      render(<AccountManager userName='John Doe' onLogout={vi.fn()} />);

      expect(screen.getByTestId('account-manager')).toBeInTheDocument();
      expect(screen.getByTestId('account-manager-btn')).toBeInTheDocument();
    });

    it('Should render with prop value', () => {
      render(
        <AccountManager
          data-testid='my-custom-account-manager-id'
          userName='John Doe'
          onLogout={vi.fn()}
        />,
      );

      expect(
        screen.getByTestId('my-custom-account-manager-id'),
      ).toBeInTheDocument();
      expect(
        screen.getByTestId('my-custom-account-manager-id-btn'),
      ).toBeInTheDocument();
    });
  });
});
