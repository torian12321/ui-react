import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TextareaSearchable } from './TextareaSearchable';

const getBtnByLabel = (label: string) =>
  screen.getByRole('button', {
    name: label,
  });

describe('Components/TextareaSearchable', () => {
  it('renders with default props', () => {
    render(<TextareaSearchable />);
    expect(screen.getByTestId('text-area-searchable')).toBeInTheDocument();
  });

  it('should display text and allow searching', () => {
    const text = 'This is a sample text for searching on text area';
    render(<TextareaSearchable text={text} />);

    const searchInput = screen.getByRole('textbox');

    // Search for 'sample' and get 1 result
    fireEvent.change(searchInput, { target: { value: 'sample' } });
    expect(screen.getByText('0/1')).toBeInTheDocument();
    expect(screen.queryAllByRole('mark').length).toBe(1);
    expect(screen.getByText('sample').tagName).toBe('MARK');

    // Search for 'text' and get 2 results
    fireEvent.change(searchInput, { target: { value: 'text' } });
    expect(screen.getByText('0/2')).toBeInTheDocument();
    expect(screen.queryAllByRole('mark').length).toBe(2);

    // Clicking clear button should clear the search and obtain 0 highlights
    fireEvent.click(getBtnByLabel('Clear'));
    expect(screen.queryAllByRole('mark').length).toBe(0);
  });

  it.skip('should handle next and previous', () => {
    window.HTMLElement.prototype.scrollIntoView = function () {};

    const text = 'This is a sample text for searching on text area';
    render(<TextareaSearchable text={text} />);

    const searchInput = screen.getByRole('textbox');

    // Search for 'text' and get 2 results
    fireEvent.change(searchInput, { target: { value: 'text' } });
    expect(screen.queryAllByRole('mark').length).toBe(2);

    // Initially, no match is focused
    expect(screen.getByText('0/2')).toBeInTheDocument();

    // Clicking next should focus on the first match
    fireEvent.click(getBtnByLabel('Next'));
    expect(screen.getByText('1/2')).toBeInTheDocument();

    // Clicking next should focus on the next match
    fireEvent.click(getBtnByLabel('Next'));
    expect(screen.getByText('2/2')).toBeInTheDocument();

    // Clicking next when on the last match should focus on the first match
    fireEvent.click(getBtnByLabel('Next'));
    expect(screen.getByText('1/2')).toBeInTheDocument();

    fireEvent.click(getBtnByLabel('Previous'));
    expect(screen.getByText('2/2')).toBeInTheDocument();
  });
});
