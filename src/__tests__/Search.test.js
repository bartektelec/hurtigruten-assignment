// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import '@testing-library/jest-dom';
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react';
import {
  render,
  fireEvent,
  screen,
  act,
  waitFor,
} from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks/pure';

import useSearch from '../hooks/useSearch';
import Search from '../components/Search';

describe('Search component', () => {
  global.fetch = query =>
    test('should manage search query', async () => {
      const { result } = renderHook(() => useSearch());
      render(<Search {...result.current} />);

      expect(screen.queryByPlaceholderText('Search')).toBeInTheDocument();

      act(() => {
        result.current.setSearchQuery('MS');
      });

      await expect(result.current.searchQuery).toEqual('MS');
    });
});
