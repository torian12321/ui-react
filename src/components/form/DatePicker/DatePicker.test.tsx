import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { configureDateFormats } from '@torian12321/js-utils/date';

// Mock the constants module
vi.mock('src/constants', () => ({
  DEFAULT_APP_LANGUAGE: 'en',
  SPELL_CHECK_LANGUAGE: 'en',
  DEFAULT_APP_THEME: 'light',
}));

// Dynamic import is necessary after the mock
const { DatePicker } = await import('./DatePicker');

describe('Components/DatePicker', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    configureDateFormats({
      dateFormat: 'DD/MM/YYYY',
      timeFormat: 'hh:mm',
    });
  });

  describe('when using default formats', () => {
    it('Should render DatePicker component', () => {
      render(<DatePicker value='2021-12-31' onChange={vi.fn()} />);
      const picker = screen.getByPlaceholderText('DD/MM/YYYY');

      expect(picker).toBeInTheDocument();
      expect(picker).toHaveValue('31/12/2021');
    });

    it('Should render DateTimePicker component', () => {
      render(
        <DatePicker
          isDateTimePicker
          value='2021-12-31 23:59:59'
          onChange={vi.fn()}
        />,
      );
      const picker = screen.getByPlaceholderText('DD/MM/YYYY hh:mm');

      expect(picker).toBeInTheDocument();
      expect(picker).toHaveValue('31/12/2021 11:59');
    });
  });

  describe('when passing custom formats', () => {
    it('Should render DatePicker component', () => {
      render(
        <DatePicker
          value='2021-12-31'
          onChange={vi.fn()}
          dateFormat='MM-DD-YYYY'
          dateTimeFormat='MM-DD-YYYY hh:mm a'
        />,
      );
      const picker = screen.getByPlaceholderText('MM-DD-YYYY');

      expect(picker).toBeInTheDocument();
      expect(picker).toHaveValue('12-31-2021');
    });

    it('Should render DateTimePicker component', () => {
      render(
        <DatePicker
          isDateTimePicker
          dateTimeFormat='MM-DD-YYYY hh:mm a'
          value='2021-12-31 23:59:59'
          onChange={vi.fn()}
        />,
      );
      const picker = screen.getByPlaceholderText('MM-DD-YYYY hh:mm aa');

      expect(picker).toBeInTheDocument();
      expect(picker).toHaveValue('12-31-2021 11:59 pm');
    });
  });

  it('Should render with passed data-testid', () => {
    render(
      <DatePicker data-testid='my-custom-datepicker-id' onChange={vi.fn()} />,
    );

    expect(screen.getByTestId('my-custom-datepicker-id')).toBeInTheDocument();
  });
});
