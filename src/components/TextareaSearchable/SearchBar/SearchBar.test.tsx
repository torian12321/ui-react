import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { SearchBar } from './SearchBar';

const getBtnByLabel = (label: string) =>
  screen.getByRole('button', {
    name: label,
  });

describe('Components/TextareaSearchable/SearchBar', () => {
  const mockOnChange = vi.fn();
  const mockOnGoToMatch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it.skip('Should render', () => {
    render(
      <SearchBar
        value=''
        totalMatches={0}
        onChange={mockOnChange}
        onGoToMatch={mockOnGoToMatch}
      />,
    );

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(getBtnByLabel('Search')).toBeInTheDocument();
    expect(getBtnByLabel('Previous')).toBeDisabled();
    expect(getBtnByLabel('Next')).toBeDisabled();
    expect(getBtnByLabel('Clear')).toBeDisabled();
  });

  it('Should handle input change', () => {
    render(
      <SearchBar
        value=''
        totalMatches={0}
        onChange={mockOnChange}
        onGoToMatch={mockOnGoToMatch}
      />,
    );

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(mockOnChange).toHaveBeenCalledWith('test');
  });

  it('Should enable navigation buttons when matches are found', () => {
    render(
      <SearchBar
        value='test'
        totalMatches={5}
        activeMatchIndex={2}
        onChange={mockOnChange}
        onGoToMatch={mockOnGoToMatch}
      />,
    );

    expect(getBtnByLabel('Previous')).toBeEnabled();
    expect(getBtnByLabel('Next')).toBeEnabled();
    expect(screen.getByText('3/5')).toBeInTheDocument();
  });

  it('Should call `onGoToMatch` when navigation buttons are clicked', () => {
    render(
      <SearchBar
        value='test'
        totalMatches={5}
        activeMatchIndex={2}
        onChange={mockOnChange}
        onGoToMatch={mockOnGoToMatch}
      />,
    );

    fireEvent.click(getBtnByLabel('Previous'));
    expect(mockOnGoToMatch).toHaveBeenCalledWith(1);

    fireEvent.click(getBtnByLabel('Next'));
    expect(mockOnGoToMatch).toHaveBeenCalledWith(3);
  });

  it('Should clear input when clear button is clicked', () => {
    render(
      <SearchBar
        value='test'
        totalMatches={5}
        onChange={mockOnChange}
        onGoToMatch={mockOnGoToMatch}
      />,
    );

    fireEvent.click(getBtnByLabel('Clear'));
    expect(mockOnChange).toHaveBeenCalledWith('');
  });
});
