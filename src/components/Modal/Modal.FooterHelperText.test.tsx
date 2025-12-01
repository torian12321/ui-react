import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DATA_TEST } from './constants';
import { FooterHelperText } from './Modal.FooterHelperText';

describe('Components/FooterHelperText', () => {
  it('Should NOT render by default', () => {
    render(<FooterHelperText />);

    expect(screen.queryByTestId(DATA_TEST.FOOTER_ERROR_MESSAGE)).toBeNull();
  });
  it('Should render with default text', () => {
    render(<FooterHelperText show />);

    expect(
      screen.queryByTestId(DATA_TEST.FOOTER_ERROR_MESSAGE),
    ).toBeInTheDocument();
    expect(screen.getByText(/Please review the errors */i)).toBeInTheDocument();
  });

  it('Should render with custom text', () => {
    render(<FooterHelperText show message='Custom text' />);

    expect(screen.getByText(/Custom text */i)).toBeInTheDocument();
  });
});
