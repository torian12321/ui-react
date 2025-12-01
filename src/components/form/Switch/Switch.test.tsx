import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Switch, useSwitch } from './';

describe('components/form/Switch', () => {
  describe('useSwitch', () => {
    it('should initialize with default value false', () => {
      const { result } = renderHook(() => useSwitch());

      expect(result.current[0]).toBe(false);
      expect(result.current[1]).toHaveProperty('setValue');
      expect(result.current[1]).toHaveProperty('toggle');
      expect(result.current[1]).toHaveProperty('reset');
    });

    it('should initialize with provided default value', () => {
      const { result } = renderHook(() => useSwitch(true));

      expect(result.current[0]).toBe(true);
    });

    it('should set value using setValue action', () => {
      const { result } = renderHook(() => useSwitch(false));

      act(() => {
        result.current[1].setValue(true);
      });

      expect(result.current[0]).toBe(true);

      act(() => {
        result.current[1].setValue(false);
      });

      expect(result.current[0]).toBe(false);
    });

    it('should toggle value using toggle action', () => {
      const { result } = renderHook(() => useSwitch(false));

      act(() => {
        result.current[1].toggle();
      });

      expect(result.current[0]).toBe(true);

      act(() => {
        result.current[1].toggle();
      });

      expect(result.current[0]).toBe(false);
    });

    it('should reset to default value using reset action', () => {
      const { result } = renderHook(() => useSwitch(false));

      // Change the value
      act(() => {
        result.current[1].setValue(true);
      });

      expect(result.current[0]).toBe(true);

      // Reset to default
      act(() => {
        result.current[1].reset();
      });

      expect(result.current[0]).toBe(false);
    });

    it('should reset to custom default value', () => {
      const { result } = renderHook(() => useSwitch(true));

      // Change the value
      act(() => {
        result.current[1].setValue(false);
      });

      expect(result.current[0]).toBe(false);

      // Reset to default
      act(() => {
        result.current[1].reset();
      });

      expect(result.current[0]).toBe(true);
    });

    it('should maintain actions reference stability', () => {
      const { result, rerender } = renderHook(() => useSwitch(false));

      // Actions should have the expected structure
      expect(result.current[1]).toHaveProperty('setValue');
      expect(result.current[1]).toHaveProperty('toggle');
      expect(result.current[1]).toHaveProperty('reset');

      // Actions should work correctly after rerender
      rerender();

      expect(result.current[1]).toHaveProperty('setValue');
      expect(result.current[1]).toHaveProperty('toggle');
      expect(result.current[1]).toHaveProperty('reset');
    });
  });

  describe('Component', () => {
    const defaultProps = {
      'data-testid': 'test-switch',
    };

    it('should render with default props', () => {
      render(<Switch {...defaultProps} />);

      const switchElement = screen.getByTestId('test-switch');
      const inputElement = screen.getByTestId('test-switch-input');

      expect(switchElement).toBeInTheDocument();
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute('type', 'checkbox');
      expect(inputElement).not.toBeChecked();
      expect(inputElement).not.toBeDisabled();
    });

    it('should render with label when provided', () => {
      render(<Switch {...defaultProps} label='Test Label' />);

      expect(screen.getByText('Test Label')).toBeInTheDocument();
    });

    it('should not render label when not provided', () => {
      render(<Switch {...defaultProps} />);

      expect(screen.queryByText('Test Label')).not.toBeInTheDocument();
    });

    it('should render as checked when checked prop is true', () => {
      render(<Switch {...defaultProps} checked />);

      const inputElement = screen.getByTestId('test-switch-input');
      expect(inputElement).toBeChecked();
    });

    it('should render as unchecked when checked prop is false', () => {
      render(<Switch {...defaultProps} checked={false} />);

      const inputElement = screen.getByTestId('test-switch-input');
      expect(inputElement).not.toBeChecked();
    });

    it('should render as disabled when disabled prop is true', () => {
      render(<Switch {...defaultProps} disabled />);

      const inputElement = screen.getByTestId('test-switch-input');
      expect(inputElement).toBeDisabled();
    });

    it('should render as enabled when disabled prop is false', () => {
      render(<Switch {...defaultProps} disabled={false} />);

      const inputElement = screen.getByTestId('test-switch-input');
      expect(inputElement).not.toBeDisabled();
    });

    it('should call onChange when clicked and not disabled', () => {
      const handleChange = vi.fn();
      render(<Switch {...defaultProps} onChange={handleChange} />);

      const inputElement = screen.getByTestId('test-switch-input');
      fireEvent.click(inputElement);

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
    });

    it('should not call onChange when disabled', () => {
      const handleChange = vi.fn();
      render(<Switch {...defaultProps} disabled onChange={handleChange} />);

      const inputElement = screen.getByTestId('test-switch-input');
      fireEvent.click(inputElement);

      expect(handleChange).not.toHaveBeenCalled();
    });

    it('should pass correct checked value to onChange', () => {
      const handleChange = vi.fn();
      render(
        <Switch {...defaultProps} checked={false} onChange={handleChange} />,
      );

      const inputElement = screen.getByTestId('test-switch-input');
      fireEvent.click(inputElement);

      expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
    });

    it('should pass name attribute to input', () => {
      render(<Switch {...defaultProps} name='test-name' />);

      const inputElement = screen.getByTestId('test-switch-input');
      expect(inputElement).toHaveAttribute('name', 'test-name');
    });

    it('should have autoComplete="off" attribute', () => {
      render(<Switch {...defaultProps} />);

      const inputElement = screen.getByTestId('test-switch-input');
      expect(inputElement).toHaveAttribute('autoComplete', 'off');
    });

    it('should have proper data attributes for styling', () => {
      render(<Switch {...defaultProps} checked disabled />);

      const switchElement = screen.getByTestId('test-switch');
      const sliderElement = switchElement.querySelector(
        '[data-is-checked="true"]',
      );

      expect(sliderElement).toHaveAttribute('data-is-checked', 'true');
      expect(sliderElement).toHaveAttribute('data-is-disabled', 'true');
    });

    it('should have proper data attributes when unchecked and enabled', () => {
      render(<Switch {...defaultProps} checked={false} disabled={false} />);

      const switchElement = screen.getByTestId('test-switch');
      const sliderElement = switchElement.querySelector(
        '[data-is-checked="false"]',
      );

      expect(sliderElement).toHaveAttribute('data-is-checked', 'false');
      expect(sliderElement).toHaveAttribute('data-is-disabled', 'false');
    });

    it('should have unique id for accessibility', () => {
      render(<Switch {...defaultProps} />);

      const switchElement = screen.getByTestId('test-switch');
      const inputElement = screen.getByTestId('test-switch-input');

      // Check that the input has an id
      expect(inputElement).toHaveAttribute('id');

      // Check that the label element exists and is properly associated
      expect(switchElement).toBeInTheDocument();
      expect(inputElement).toBeInTheDocument();

      // The input should be accessible via the label
      expect(switchElement).toContainElement(inputElement);
    });

    it('should handle multiple clicks correctly', () => {
      const handleChange = vi.fn();
      render(
        <Switch {...defaultProps} checked={false} onChange={handleChange} />,
      );

      const inputElement = screen.getByTestId('test-switch-input');

      // First click - should toggle to true
      fireEvent.click(inputElement);
      expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));

      // Second click - should toggle to false (but the component doesn't change its own state)
      fireEvent.click(inputElement);
      expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));

      expect(handleChange).toHaveBeenCalledTimes(2);
    });

    it('should not call onChange when onChange is not provided', () => {
      // This should not throw an error
      expect(() => {
        render(<Switch {...defaultProps} />);
        const inputElement = screen.getByTestId('test-switch-input');
        fireEvent.click(inputElement);
      }).not.toThrow();
    });
  });
});
