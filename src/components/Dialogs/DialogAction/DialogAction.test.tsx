import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { DATA_TEST } from './dataTest';
import { DialogAction } from './DialogAction';
import type { DialogActionProps } from './DialogActionProps.types';

const renderDialog = (props?: Partial<DialogActionProps>) =>
  render(<DialogAction open message='hi' onConfirm={() => null} {...props} />);

describe('Components/Dialog/DialogAction', () => {
  it('Should render', () => {
    const message = 'Content of the dialog';
    renderDialog({ message });
    const dialog = screen.getByRole('dialog');

    const confirmButton = screen.getByTestId(DATA_TEST.CONFIRM_BUTTON);
    const cancelButton = screen.queryByTestId(DATA_TEST.CANCEL_BUTTON);

    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveTextContent(message);
    expect(confirmButton).toBeInTheDocument();
    expect(cancelButton).not.toBeInTheDocument();
  });

  it('Should NOT render when open is set to false', () => {
    renderDialog({ open: false });

    expect(screen.queryByRole('dialog')).toBeNull();
  });

  describe('action buttons', () => {
    it('Should call onClose function when Cancel button is pressed', () => {
      const onClose = vi.fn();
      renderDialog({ onClose });
      const closeButton = screen.getByTestId(DATA_TEST.CANCEL_BUTTON);

      fireEvent.click(closeButton);
      expect(closeButton).toBeInTheDocument();
      expect(onClose).toHaveBeenCalledTimes(1);
    });

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
