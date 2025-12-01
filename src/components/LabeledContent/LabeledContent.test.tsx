import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LabeledContent } from '.';

describe('Components/LabeledContent', () => {
  it('Should render the label and content correctly', () => {
    render(
      <LabeledContent label='Test Label' data-testid='labeled-content'>
        Test Content
      </LabeledContent>,
    );

    const labelElement = screen.getByText('Test Label');
    const contentElement = screen.getByText('Test Content');

    expect(labelElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  it('Should render with the correct aria-labelledby attribute', () => {
    render(
      <LabeledContent label='Test Label' data-testid='labeled-content'>
        Test Content
      </LabeledContent>,
    );

    const regionElement = screen.getByRole('region');
    const labelElement = screen.getByText('Test Label');

    expect(regionElement).toHaveAttribute('aria-labelledby', labelElement.id);
  });
});
