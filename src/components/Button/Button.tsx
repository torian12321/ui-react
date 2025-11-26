import type { ButtonProps } from './Button.types';

import './button.css';

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  disabled = false,
  type = 'button',
  onClick,
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type={type}
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' ',
      )}
      style={{ backgroundColor }}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
