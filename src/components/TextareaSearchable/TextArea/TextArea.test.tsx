import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TextArea } from './TextArea';

describe('Components/TextareaSearchable/TextArea', () => {
  it('Should render', () => {
    const textParts = [
      { text: 'Hello ', highlight: false },
      { text: 'world', highlight: true },
      { text: '!', highlight: false },
    ];

    render(<TextArea textParts={textParts} />);

    expect(screen.getByTestId('searchable-text')).toBeInTheDocument();

    // Text has some parts wrapped in a `<mark>` tag, so we need partially search the text first
    const el = screen.getByText('Hello ', { exact: false });
    expect(el.textContent).toEqual('Hello world!');

    expect(screen.getByText('world')).toHaveAttribute(
      'data-is-matching',
      'true',
    );
  });

  it('Should apply correct styles to highlighted text', () => {
    const textParts = [
      { text: 'Highlighted ', highlight: true },
      { text: 'text', highlight: false },
    ];

    render(<TextArea textParts={textParts} />);

    const highlightedText = screen.getByText('Highlighted');
    expect(highlightedText).toHaveAttribute('data-is-matching', 'true');
    expect(highlightedText.tagName).toBe('MARK');

    const otherText = screen.getByText('text');
    expect(otherText).not.toHaveAttribute('data-is-matching', 'true');
    expect(otherText.tagName).not.toBe('MARK');
  });

  it('should use custom highlight component when provided', () => {
    const textParts = [{ text: 'Custom highlight', highlight: true }];
    const CustomHighlight = ({ children }: { children: React.ReactNode }) => (
      <span data-testid='custom-highlight'>{children}</span>
    );

    render(
      <TextArea
        textParts={textParts}
        highlightConfig={{ component: CustomHighlight }}
      />,
    );

    expect(screen.getByTestId('custom-highlight')).toBeInTheDocument();
    expect(screen.getByTestId('custom-highlight')).toHaveTextContent(
      'Custom highlight',
    );
  });

  it('handles active match index', () => {
    window.HTMLElement.prototype.scrollIntoView = function () {};

    const textParts = [
      { text: 'First ', highlight: false },
      { text: 'Second ', highlight: true },
      { text: 'Third', highlight: false },
      { text: 'Fourth', highlight: true },
    ];

    render(<TextArea textParts={textParts} activeMatchIndex={1} />);

    const matches = screen.queryAllByRole('mark');
    expect(matches).toHaveLength(2);

    // `Second` and `Fourth` should be highlighted
    expect(screen.getByText('Second')).toHaveAttribute(
      'data-is-matching',
      'true',
    );
    expect(screen.getByText('Fourth')).toHaveAttribute(
      'data-is-matching',
      'true',
    );

    // Element at index 1 should be focused
    expect(screen.getByText('Second')).toHaveAttribute(
      'data-is-focused',
      'false',
    );
    expect(screen.getByText('Fourth')).toHaveAttribute(
      'data-is-focused',
      'true',
    );
  });
});
