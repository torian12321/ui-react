import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './Button';
import type { ButtonProps } from './Button.types';

const renderButton = (props?: Partial<ButtonProps>) =>
  render(<Button {...props}>Submit button</Button>);

describe('Components/Button', () => {
  it('Should render', () => {
    renderButton();
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Submit button');
    expect(button).not.toHaveAttribute('disabled');
  });

  it('Should call function on click', () => {
    const onClick = vi.fn();
    renderButton({ onClick });
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Should be disabled and non clickable', () => {
    const onClick = vi.fn();
    renderButton({ onClick, disabled: true });
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(button).toHaveAttribute('disabled');
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('Should be disabled and non clickable when it is loading', () => {
    const onClick = vi.fn();
    renderButton({ onClick, loading: true });
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(button).toHaveAttribute('disabled');
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('Should render with passed data-testid', () => {
    renderButton({ 'data-testid': 'my-custom-button-id' });

    expect(screen.getByTestId('my-custom-button-id')).toBeInTheDocument();
  });
});
