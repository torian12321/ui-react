import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Footer } from './Footer';

describe('Layout/Footer', () => {
  it('Should render', () => {
    render(<Footer>Footer Content</Footer>);
    const footerComponent = screen.getByRole('contentinfo');

    expect(footerComponent).toBeInTheDocument();
    expect(footerComponent).toHaveTextContent('Footer Content');
    expect(footerComponent).not.toHaveAttribute('title');
  });

  it('Should render with custom title', () => {
    render(<Footer title='my title'>Footer Content</Footer>);
    const footerComponent = screen.getByTitle('my title');

    expect(footerComponent).toBeInTheDocument();
    expect(footerComponent).toHaveTextContent('Footer Content');
    expect(footerComponent).toHaveAttribute('title');
  });

  describe('prop data-testid', () => {
    it('Should render with default value', () => {
      render(<Footer>Footer Content</Footer>);

      expect(screen.getByTestId('layout-footer')).toBeInTheDocument();
    });

    it('Should render with prop value', () => {
      render(<Footer data-testid='my-footer-id'>Footer Content</Footer>);

      expect(screen.getByTestId('my-footer-id')).toBeInTheDocument();
    });
  });
});
