import { renderHook } from '@testing-library/react-hooks';
import useSearch from './useSearch.js';

describe('useSearch hook', () => {
  const { result } = renderHook(() => useSearch());
  test('should perform a API call', () => {
    expect(result.current.results).toEqual(false);
  });
});
