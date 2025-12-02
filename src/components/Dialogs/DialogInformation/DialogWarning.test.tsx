import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { DATA_TEST } from './dataTest';
import { DialogInformation } from './DialogInformation';
import type { DialogInformationProps } from './DialogInformation.types';

const renderDialog = (props?: Partial<DialogInformationProps>) =>
  render(<DialogInformation open message='' onConfirm={vi.fn()} {...props} />);

describe('Components/Dialog/DialogInformation', () => {
  it('Should render', () => {
    const message = 'Custom Dialog warning Content';
    renderDialog({ message });
    const dialog = screen.getByRole('dialog');

    const confirmButton = screen.getByTestId(DATA_TEST.CONFIRM_BUTTON);

    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveTextContent(message);
    expect(confirmButton).toBeInTheDocument();
  });

  it('Should NOT render when open is set to false', () => {
    renderDialog({ open: false });

    expect(screen.queryByRole('dialog')).toBeNull();
  });

  describe('action buttons', () => {
    it('Should call onConfirm function when Confirm button is pressed', () => {
      const onConfirm = vi.fn();
      renderDialog({ onConfirm });
      const confirmButton = screen.getByTestId(DATA_TEST.CONFIRM_BUTTON);

      fireEvent.click(confirmButton);
      expect(confirmButton).toBeInTheDocument();
      expect(onConfirm).toHaveBeenCalledTimes(1);
    });
  });
});
