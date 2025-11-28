import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ThemeSelector } from './ThemeSelector';
import type { ThemeOptions } from './ThemeSelector.types';

const mockOptions: ThemeOptions[] = [
  { value: 'dark', label: 'Dark' },
  { value: 'light', label: 'Light' },
];

const getButton = () =>
  screen.getByRole('button', {
    name: /theme selector/i,
  });

describe('Layout/Header/ThemeSelector', () => {
  it('Should render without crashing', () => {
    render(<ThemeSelector options={mockOptions} />);

    expect(getButton()).toBeInTheDocument();
  });

  it('Should open menu on button click', () => {
    render(<ThemeSelector options={mockOptions} />);

    fireEvent.click(getButton());

    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('Should call `onChange` when an option is clicked', () => {
    const onChange = vi.fn();
    render(<ThemeSelector options={mockOptions} onChange={onChange} />);

    fireEvent.click(getButton());
    fireEvent.click(screen.getByText('Dark'));

    expect(onChange).toHaveBeenCalledWith('dark');
  });

  describe('prop data-testid', () => {
    it('Should render with default value', () => {
      render(<ThemeSelector options={mockOptions} />);

      expect(screen.getByTestId('theme-selector')).toBeInTheDocument();
    });

    it('Should render with prop value', () => {
      render(
        <ThemeSelector
          data-testid='my-custom-selector-id'
          options={mockOptions}
          onChange={vi.fn()}
        />,
      );

      expect(screen.getByTestId('my-custom-selector-id')).toBeInTheDocument();
    });
  });
});
