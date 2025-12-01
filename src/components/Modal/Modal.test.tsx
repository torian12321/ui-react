import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { DATA_TEST } from './constants';
import { Modal } from './Modal';
import type { ModalProps } from './Modal.types';

const renderModal = (props?: Partial<ModalProps>) =>
  render(
    <Modal isOpen {...props}>
      <Modal.Body>Custom Modal Content</Modal.Body>
    </Modal>,
  );

describe('Components/Modal', () => {
  it('Should render', () => {
    const modalTitle = 'Modal test title';
    renderModal({ title: modalTitle });
    const modal = screen.getByRole('dialog');

    const modalHeader = screen.getByTestId(DATA_TEST.HEADER);
    const modalBody = screen.getByTestId(DATA_TEST.BODY);

    expect(modal).toBeInTheDocument();
    expect(modalHeader).toHaveTextContent(modalTitle);
    expect(modalBody).toHaveTextContent('Custom Modal Content');
  });

  it('Should NOT render when isOpen is set to false', () => {
    renderModal({ isOpen: false });

    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('Should render without title', () => {
    renderModal();
    const modal = screen.getByRole('dialog');

    const modalHeader = screen.queryByTestId(DATA_TEST.HEADER);
    const modalBody = screen.getByTestId(DATA_TEST.BODY);

    expect(modal).toBeInTheDocument();
    expect(modalHeader).not.toBeInTheDocument();
    expect(modalBody).toHaveTextContent('Custom Modal Content');
  });

  describe('close button', () => {
    it('Should NOT render when onClose is not set', () => {
      renderModal();
      const modalCloseIcon = screen.queryByTestId(DATA_TEST.CLOSE_BUTTON);

      expect(modalCloseIcon).not.toBeInTheDocument();
    });
    it('Should render when onClose is set', () => {
      const onClose = vi.fn();
      renderModal({ onClose });
      const modalCloseIcon = screen.getByTestId(DATA_TEST.CLOSE_BUTTON);

      expect(modalCloseIcon).toBeInTheDocument();
    });

    it('Should call onClose function when X button is pressed', () => {
      const onClose = vi.fn();
      renderModal({ onClose });
      const modalCloseIcon = screen.getByTestId(DATA_TEST.CLOSE_BUTTON);

      fireEvent.click(modalCloseIcon);
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('prop data-testid', () => {
    it('Should render with default value', () => {
      renderModal();

      expect(screen.getByTestId('modal')).toBeInTheDocument();
    });

    it('Should render with prop value', () => {
      renderModal({ 'data-testid': 'my-custom-modal-id' });

      expect(screen.getByTestId('my-custom-modal-id')).toBeInTheDocument();
    });
  });
});
