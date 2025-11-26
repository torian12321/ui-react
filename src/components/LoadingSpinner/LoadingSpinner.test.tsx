import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LoadingSpinner } from './LoadingSpinner';

describe('Components/LoadingSpinner', () => {
  it('Should render', () => {
    render(<LoadingSpinner />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });
  it('Should NOT render when show is set to false', () => {
    render(<LoadingSpinner show={false} />);

    expect(screen.queryByRole('status')).toBeNull();
  });

  describe('prop data-testid', () => {
    it('Should render with default value', () => {
      render(<LoadingSpinner />);

      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    it('Should render with prop value', () => {
      render(<LoadingSpinner data-testid='my-custom-loader-spinner' />);

      expect(
        screen.getByTestId('my-custom-loader-spinner'),
      ).toBeInTheDocument();
    });
  });
});
