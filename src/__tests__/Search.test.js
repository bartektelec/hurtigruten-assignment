import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, act, queryByTitle } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks/pure';

import useSearch, { API_URL } from '../hooks/useSearch';
import Search from '../components/Search';

const mockData = [
  {
    id: 'FM',
    name: 'MS Finnmarken',
    url: 'hurtigruten.no/skip/ms-finnmarken/',
  },
  {
    id: 'FR',
    name: 'MS Fram',
    url: 'hurtigruten.no/skip/ms-fram/',
  },
  {
    id: 'FN',
    name: 'MS Fridtjof Nansen',
    url: 'hurtigruten.no/skip/ms-fridtjof-nansen/',
  },
  {
    id: 'KH',
    name: 'MS Kong Harald',
    url: 'hurtigruten.no/skip/ms-kong-harald/',
  },
  {
    id: 'LO',
    name: 'MS Lofoten',
    url: 'hurtigruten.no/skip/ms-lofoten/',
  },
  {
    id: 'MS',
    name: 'MS Midnatsol',
    url: 'hurtigruten.no/skip/ms-midnatsol/',
  },
];

describe('Search component', () => {
  global.fetch = query => {
    query.replace(API_URL, '');
    return mockData.filter(ship =>
      ship.name.toLowerCase().includes(query.toLowerCase())
    );
  };
  test('should manage search query', async () => {
    const { result } = renderHook(() => useSearch());
    render(<Search {...result.current} />);

    expect(screen.queryByPlaceholderText('Search')).toBeInTheDocument();

    act(() => {
      result.current.setSearchQuery('MS');
    });

    expect(result.current.searchQuery).toEqual('MS');
  });

  test('should find and dispay items', async () => {
    const { result } = renderHook(() => useSearch());
    render(<Search {...result.current} />);

    result.current.setSearchQuery('lofoten');

    setTimeout(() => {
      expect(screen.getByText(/lofoten/gi)).toBeInTheDocument();
      expect(screen.getByText(/fram/gi)).not.toBeInTheDocument();
    }, 300);
  });
});
