import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { SearchBar } from './SearchBar';
import type { SearchBarProps } from './SearchBar.types';

const getBtnByLabel = (label: string) =>
  screen.getByRole('button', {
    name: label,
  });
const queryBtnByLabel = (label: string) =>
  screen.queryByRole('button', {
    name: label,
  });

const getSearchInput = () =>
  screen.getByRole('textbox', {
    name: /search/i,
  });
const textQuery = (text?: string) => {
  fireEvent.change(getSearchInput(), {
    target: { value: text },
  });
};

const RenderSearchBar = (props?: Partial<SearchBarProps>) => {
  const [value, setValue] = useState('');

  return (
    <SearchBar
      value={value}
      onChange={setValue}
      onSearch={() => {}}
      {...props}
    />
  );
};

describe('Components/SearchBar', () => {
  it('should render with default props', () => {
    render(<RenderSearchBar />);

    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
    expect(queryBtnByLabel('Search')).toBeInTheDocument();

    // Clear and Sync button should not be rendered by default
    expect(queryBtnByLabel('Clear')).not.toBeInTheDocument();
    expect(queryBtnByLabel('Sync')).not.toBeInTheDocument();
  });

  it.skip('should show clear button after typing a search', () => {
    const inputText = 'Lorem ipsum dolor sit amet';
    const handleSearch = vi.fn();
    render(<RenderSearchBar onSearch={handleSearch} />);

    // Initially, no clear button and empty search input
    expect(queryBtnByLabel('Clear')).not.toBeInTheDocument();
    expect(getSearchInput()).toHaveValue('');

    // Typing a search should update the search input
    textQuery(inputText);

    expect(getSearchInput()).toHaveValue(inputText);
    expect(queryBtnByLabel('Clear')).toBeInTheDocument();

    // Clicking clear should reset the search input
    fireEvent.click(getBtnByLabel('Clear'));
    expect(queryBtnByLabel('Clear')).not.toBeInTheDocument();
    expect(getSearchInput()).toHaveValue('');
  });

  it('should perform search action', () => {
    const inputText = 'Lorem ipsum dolor sit amet';
    const handleSearch = vi.fn();
    render(<RenderSearchBar onSearch={handleSearch} />);

    textQuery(inputText);

    // Clicking search button
    fireEvent.click(getBtnByLabel('Search'));

    expect(getSearchInput()).toHaveValue(inputText);
    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith(inputText);

    // Press 'Enter' key on search input
    fireEvent.keyUp(getSearchInput(), { key: 'Enter' });

    expect(getSearchInput()).toHaveValue(inputText);
    expect(handleSearch).toHaveBeenCalledTimes(2);
    expect(handleSearch).toHaveBeenLastCalledWith(inputText);
  });

  it('should perform sync action', () => {
    const handleOnSync = vi.fn();
    render(<RenderSearchBar onSync={handleOnSync} />);

    expect(queryBtnByLabel('Sync')).toBeInTheDocument();
    expect(handleOnSync).toHaveBeenCalledTimes(0);

    fireEvent.click(getBtnByLabel('Sync'));

    expect(handleOnSync).toHaveBeenCalledTimes(1);
  });
});
