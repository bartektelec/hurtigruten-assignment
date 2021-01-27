import React, { useState, useCallback, useEffect } from 'react';

const API_URL = 'http://localhost:4000/api/ships/';

async function getShipsByName(query) {
  const response = await fetch(API_URL + query);
  const found = await response.json();
  return found;
}

// function debounce(func, wait) {
//   let timeout;
//   return function () {
//     const context = this,
//       args = arguments;
//     const later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (!timeout) func.apply(context, args);
//   };
// }

const useSearch = () => {
  let timeout;

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
  return { results, searchQuery, setSearchQuery, performSearch };
};

export default useSearch;
