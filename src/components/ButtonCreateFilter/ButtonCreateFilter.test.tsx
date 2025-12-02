import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { ButtonCreateFilter } from './ButtonCreateFilter';
import { DATA_TEST } from './dataTest';

describe('Components/ButtonCreateFilter', () => {
  it('Should render', () => {
    render(<ButtonCreateFilter onSubmit={vi.fn()} />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Create new filter');
    expect(button).not.toHaveAttribute('disabled');
  });

  it('Should show text field on click button', () => {
    render(<ButtonCreateFilter onSubmit={vi.fn()} />);

    // Field is initially hidden.
    expect(screen.queryByTestId(DATA_TEST.FIELD)).toBeNull();
    expect(screen.queryByRole('textbox')).toBeNull();

    fireEvent.click(screen.getByRole('button'));

    // Field should be visible after clicking the button.
    expect(screen.queryByTestId(DATA_TEST.FIELD)).toBeInTheDocument();
    expect(screen.queryByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
  });

  describe('Submit action', () => {
    it('Should show text field, type on it, and hide the field when submit is successful', async () => {
      const onSubmit = vi.fn((_fn: string) => Promise.resolve(true));
      const newFieldName = 'Hello, World!';
      render(<ButtonCreateFilter onSubmit={onSubmit} />);

      // Click the main button to show the input
      fireEvent.click(screen.getByRole('button'));

      // Type on the input
      await userEvent.type(screen.getByRole('textbox'), newFieldName);
      expect(screen.getByRole('textbox')).toHaveValue(newFieldName);

      await waitFor(() =>
        fireEvent.click(screen.getByRole('button', { name: /save/i })),
      );
      expect(onSubmit).toHaveBeenCalledTimes(1);
      await waitFor(() => expect(onSubmit).toHaveReturned());

      // Wait for the field to be hidden after successful submit.
      await waitFor(() =>
        expect(screen.queryByTestId(DATA_TEST.FIELD)).toBeNull(),
      );
    });

    it('Should show text field, type on it, but not hide the field when submit is failed', async () => {
      const onSubmitFailing = vi.fn((_fn: string) => Promise.resolve(false));
      const newFieldName = 'Hello, World!';
      render(<ButtonCreateFilter onSubmit={onSubmitFailing} />);

      // Click the main button to show the input
      fireEvent.click(screen.getByRole('button'));

      // Type on the input
      await userEvent.type(screen.getByRole('textbox'), newFieldName);
      expect(screen.getByRole('textbox')).toHaveValue(newFieldName);

      await waitFor(() =>
        fireEvent.click(screen.getByRole('button', { name: /save/i })),
      );
      expect(onSubmitFailing).toHaveBeenCalledTimes(1);
      await waitFor(() => expect(onSubmitFailing).toHaveReturned());

      // Wait for the field to be hidden after failing submit.
      await waitFor(() =>
        expect(screen.queryByTestId(DATA_TEST.FIELD)).toBeInTheDocument(),
      );
    });

    it.skip('Should not trigger onSubmit if the input is too long', async () => {
      const onSubmit = vi.fn();
      const newFieldName =
        'Really large text with more than maxFilterNameLenght characters';
      render(
        <ButtonCreateFilter onSubmit={onSubmit} maxFilterNameLenght={10} />,
      );

      // Click the main button to show the input
      fireEvent.click(screen.getByRole('button'));

      // Type on the input
      await userEvent.type(screen.getByRole('textbox'), newFieldName);
      expect(screen.getByRole('textbox')).toHaveValue(newFieldName);

      await waitFor(() =>
        fireEvent.click(screen.getByRole('button', { name: /save/i })),
      );
      expect(onSubmit).toHaveBeenCalledTimes(0);
      await waitFor(() =>
        expect(
          screen.getByText(/filter name max 10 characters/i),
        ).toBeInTheDocument(),
      );
    });
  });

  describe('prop data-testid', () => {
    it('Should render with default value', () => {
      render(<ButtonCreateFilter onSubmit={vi.fn()} />);

      expect(screen.getByTestId(DATA_TEST.ROOT)).toBeInTheDocument();
    });

    it('Should render with prop value', () => {
      render(
        <ButtonCreateFilter
          onSubmit={vi.fn()}
          data-testid='my-create-filter-id'
        />,
      );

      expect(screen.getByTestId('my-create-filter-id')).toBeInTheDocument();
    });
  });
});
