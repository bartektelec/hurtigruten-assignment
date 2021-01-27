import React, { useState, useCallback, useEffect, useRef } from 'react';

const API_URL = 'http://localhost:4000/api/ships/';

async function getShipsByName(query) {
  const response = await fetch(API_URL + query);
  const found = await response.json();
  return found;
}

function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (!timeout) func.apply(context, args);
  };
}

const useSearch = () => {
  const mounted = useRef(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const performSearch = useCallback(
    debounce(() => {
      (async () => {
        try {
          if (!mounted) return;
          const response = await getShipsByName(searchQuery);
          setResults(await response);
        } catch (error) {
          console.error(error);
        }
      })();
    }, 200),
    [searchQuery]
  );

  useEffect(() => {
    if (!searchQuery) return setResults([]);
    performSearch();
  }, [performSearch, searchQuery]);

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  return { results, searchQuery, setSearchQuery };
};

export default useSearch;
