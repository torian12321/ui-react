import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LoadingBar } from './LoadingBar';

describe('Components/LoadingBar', () => {
  it('Should render', () => {
    render(<LoadingBar />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });
  it('Should NOT render when show is set to false', () => {
    render(<LoadingBar show={false} />);

    expect(screen.queryByRole('status')).toBeNull();
  });

  describe('prop data-testid', () => {
    it('Should render with default value', () => {
      render(<LoadingBar />);

      expect(screen.getByTestId('loader-bar')).toBeInTheDocument();
    });

    it('Should render with prop value', () => {
      render(<LoadingBar data-testid='my-custom-loader-bar-id' />);

      expect(screen.getByTestId('my-custom-loader-bar-id')).toBeInTheDocument();
    });
  });
});
