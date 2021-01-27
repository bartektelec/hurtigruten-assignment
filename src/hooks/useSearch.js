import React, { useState, useCallback, useEffect } from 'react';

const API_URL = 'http://localhost:4000/api/ships/';

async function getShipsByName(query) {
  const response = await fetch(API_URL + query);
  const found = await response.json();
  return found;
}

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const performSearch = useCallback(() => {
    (async () => {
      try {
        const response = await getShipsByName(searchQuery);
        setResults(await response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [searchQuery]);

  useEffect(() => {
    if (!searchQuery) return setResults([]);
    performSearch();
  }, [performSearch, searchQuery]);
  return { results, searchQuery, setSearchQuery };
};

export default useSearch;
