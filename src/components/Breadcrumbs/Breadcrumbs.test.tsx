import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Breadcrumbs } from './';

describe('Components/Breadcrumbs', () => {
  it('Should render with two steps', () => {
    render(<Breadcrumbs steps={['Home', 'Breadcrumb step 2']} />);

    const listComponent = screen.getByRole('list');
    const listItemComponents = within(listComponent).getAllByRole('listitem');

    expect(listComponent).toBeInTheDocument();
    expect(listItemComponents).toHaveLength(2);
    expect(listItemComponents[0]).toHaveTextContent('Home');
    expect(listItemComponents[1]).toHaveTextContent('Breadcrumb step 2');
  });
  it('Should render on loading indicator', () => {
    render(<Breadcrumbs steps={['Home', 'Breadcrumb step 2']} isLoading />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('Should render with passed data-testid', () => {
    render(
      <Breadcrumbs
        steps={['Step 1', 'Step 2']}
        data-testid='my-custom-breadcrumbs-id'
      />,
    );

    expect(screen.getByTestId('my-custom-breadcrumbs-id')).toBeInTheDocument();
  });
});
