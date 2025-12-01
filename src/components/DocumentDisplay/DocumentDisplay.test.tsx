import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DocumentDisplay } from './DocumentDisplay';

describe('Components/DocumentDisplay', () => {
  it('renders an empty string when no text is provided', () => {
    render(<DocumentDisplay data-testid='document-display' content='' />);

    const textField = screen.getByTestId('document-display');
    expect(textField).toHaveTextContent('');
  });

  it('renders the provided text', () => {
    const testText = 'This is a test text';

    render(<DocumentDisplay content={testText} />);

    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('renders the provided HTML', () => {
    const testHtml = '<p>This is a test text</p>';

    render(<DocumentDisplay content={testHtml} />);

    expect(screen.getByText('This is a test text')).toBeInTheDocument();
  });

  it('Should render with passed data-testid', () => {
    render(<DocumentDisplay data-testid='my-custom-document-id' />);

    expect(screen.getByTestId('my-custom-document-id')).toBeInTheDocument();
  });
});
