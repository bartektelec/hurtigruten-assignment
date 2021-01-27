import React, { useState, useCallback, useEffect } from 'react';

import Exercise from './assets/exercise3.svg';

import SearchInput from './components/SearchInput.js';

const API_URL = 'http://localhost:4000/api/ships/';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const onSearch = useCallback(
    async e => {
      e.preventDefault();
      const response = await fetch(API_URL + searchQuery);
      const found = await response.json();
      await setResults(await found);
      setSearchQuery('');
    },
    [searchQuery]
  );

  return (
    <div className='container'>
      <div className='canvas'>
        <SearchInput
          value={searchQuery}
          setValue={setSearchQuery}
          onSearch={onSearch}
        />
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
