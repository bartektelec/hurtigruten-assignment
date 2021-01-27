import React, { useState, useCallback, useEffect } from 'react';

import SearchInput from './components/SearchInput.js';

const API_URL = 'http://localhost:4000/api/ships/';

async function getShipsByName(query) {
  const response = await fetch(API_URL + query);
  const found = await response.json();
  return found;
}

function App() {
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

  return (
    <div className='container'>
      <div className='canvas'>
        <SearchInput value={searchQuery} setValue={setSearchQuery} />
      </div>
      <ul className='results'>
        {results.map(ship => (
          <li className='results__item' key={ship.id}>
            {ship.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
