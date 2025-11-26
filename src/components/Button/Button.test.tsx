import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './Button';

describe('components/Button', () => {
  it('renders label correctly', () => {
    render(<Button label='Click me' />);
    expect(
      screen.getByRole('button', { name: /click me/i }),
    ).toBeInTheDocument();
  });

  it('applies base storybook-button class', () => {
    render(<Button label='Test Button' />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('storybook-button');
  });

  describe('primary prop', () => {
    it('applies secondary style by default', () => {
      render(<Button label='Default Button' />);
      const button = screen.getByRole('button');
      expect(button.className).toContain('storybook-button--secondary');
    });

    it('applies primary style when primary is true', () => {
      render(<Button primary label='Primary Button' />);
      const button = screen.getByRole('button');
      expect(button.className).toContain('storybook-button--primary');
    });

    it('applies secondary style when primary is false', () => {
      render(<Button primary={false} label='Secondary Button' />);
      const button = screen.getByRole('button');
      expect(button.className).toContain('storybook-button--secondary');
    });
  });

  describe('sizes', () => {
    it('applies medium size by default', () => {
      render(<Button label='Medium Button' />);
      const button = screen.getByRole('button');
      expect(button.className).toContain('storybook-button--medium');
    });

    it('applies small size when specified', () => {
      render(<Button size='small' label='Small Button' />);
      const button = screen.getByRole('button');
      expect(button.className).toContain('storybook-button--small');
    });

    it('applies large size when specified', () => {
      render(<Button size='large' label='Large Button' />);
      const button = screen.getByRole('button');
      expect(button.className).toContain('storybook-button--large');
    });
  });

  describe('backgroundColor prop', () => {
    it('applies custom background color', () => {
      render(<Button label='Custom Color' backgroundColor='#ff0000' />);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ backgroundColor: '#ff0000' });
    });
  });

  describe('disabled prop', () => {
    it('is not disabled by default', () => {
      render(<Button label='Enabled Button' />);
      const button = screen.getByRole('button');
      expect(button).not.toBeDisabled();
    });

    it('disables button when disabled is true', () => {
      render(<Button disabled label='Disabled Button' />);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });

  describe('type prop', () => {
    it('applies button type by default', () => {
      render(<Button label='Button' />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });

    it('applies submit type when specified', () => {
      render(<Button type='submit' label='Submit' />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });
  });

  describe('onClick handler', () => {
    it('calls onClick when button is clicked', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button label='Click me' onClick={handleClick} />);
      const button = screen.getByRole('button');
      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button disabled label='Click me' onClick={handleClick} />);
      const button = screen.getByRole('button');
      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
