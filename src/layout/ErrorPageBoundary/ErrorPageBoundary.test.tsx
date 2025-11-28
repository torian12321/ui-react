import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ErrorPageBoundary } from './ErrorPageBoundary';

describe('Layout/ErrorPageBoundary', () => {
  const mockErrorHandler = vi.fn();

  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('Should render children when there is no error', () => {
    render(
      <ErrorPageBoundary errorHandler={mockErrorHandler}>
        <div>Test Content</div>
      </ErrorPageBoundary>,
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('Should display error message and call errorHandler when an error occurs', () => {
    render(
      <ErrorPageBoundary errorHandler={mockErrorHandler}>
        <div>Test Content</div>
      </ErrorPageBoundary>,
    );

    // Simulate an error
    const error = new Error('Test error');
    fireEvent(window, new ErrorEvent('error', { error }));

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    expect(mockErrorHandler).toHaveBeenCalledWith('Something went wrong!');
    expect(console.error).toHaveBeenCalledWith('Uncaught error:', error);
  });
});
