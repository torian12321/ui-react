import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { LanguageSelector } from './LanguageSelector';
import type { LanguageOptions } from './LanguageSelector.types';

const mockOptions: LanguageOptions[] = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
];

const getButton = () =>
  screen.getByRole('button', {
    name: /language selector/i,
  });

describe('Layout/Header/LanguageSelector', () => {
  it('Should render without crashing', () => {
    render(<LanguageSelector options={mockOptions} />);

    expect(getButton()).toBeInTheDocument();
  });

  it('Should open menu on button click', () => {
    render(<LanguageSelector options={mockOptions} />);

    fireEvent.click(getButton());

    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('Should call `onChange` when an option is clicked', () => {
    const onChange = vi.fn();
    render(<LanguageSelector options={mockOptions} onChange={onChange} />);

    fireEvent.click(getButton());
    fireEvent.click(screen.getByText('English'));

    expect(onChange).toHaveBeenCalledWith('en');
  });

  describe('prop data-testid', () => {
    it('Should render with default value', () => {
      render(<LanguageSelector options={mockOptions} />);

      expect(screen.getByTestId('language-selector')).toBeInTheDocument();
    });

    it('Should render with prop value', () => {
      render(
        <LanguageSelector
          data-testid='my-custom-selector-id'
          options={mockOptions}
          onChange={vi.fn()}
        />,
      );

      expect(screen.getByTestId('my-custom-selector-id')).toBeInTheDocument();
    });
  });
});
