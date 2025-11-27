import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Chip } from './';

describe('Components/Chip', () => {
  it('Should render a list with 2 item elements', () => {
    render(
      <Chip.List>
        <Chip label='Chip name' />
        <Chip label='Second chip' />
      </Chip.List>,
    );

    const listComponent = screen.getByRole('list');
    const listItemComponents = within(listComponent).getAllByRole('listitem');

    expect(listComponent).toBeInTheDocument();
    expect(listItemComponents).toHaveLength(2);

    expect(listItemComponents[1]).toHaveTextContent('Second chip');
  });

  it('Should trigger onDelete when x icon is clicked', () => {
    const handleDelete = vi.fn();

    render(
      <Chip.List>
        <Chip label='Chip name' />
        <Chip label='Second chip' onDelete={handleDelete} />
      </Chip.List>,
    );

    expect(handleDelete).toHaveBeenCalledTimes(0);

    const listComponent = screen.getByRole('list');
    const listItemComponents = within(listComponent).getAllByRole('listitem');
    const deleteIcon = within(listItemComponents[1]).getByTestId('CancelIcon');

    fireEvent.click(deleteIcon);

    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it('Should render Yes/No for boolean values', () => {
    render(
      <Chip.List>
        <Chip label />
        <Chip label={false} />
      </Chip.List>,
    );

    expect(screen.getByText(/Yes/i)).toBeInTheDocument();
    expect(screen.getByText(/No/i)).toBeInTheDocument();
  });

  it('Should render with passed data-testid', () => {
    render(
      <Chip.List data-testid='my-custom-chips-wrapper-id'>
        <Chip label='chip 1' data-testid='my-custom-chips-01-id' />
        <Chip label='chip 2' data-testid='my-custom-chips-02-id' />
      </Chip.List>,
    );

    expect(
      screen.getByTestId('my-custom-chips-wrapper-id'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('my-custom-chips-01-id')).toBeInTheDocument();
    expect(screen.getByTestId('my-custom-chips-02-id')).toBeInTheDocument();
  });
});
