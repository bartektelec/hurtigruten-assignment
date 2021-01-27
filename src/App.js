import React from 'react';

import SearchInput from './components/SearchInput';

import useSearch from './hooks/useSearch';

function App() {
  const { searchQuery, setSearchQuery, results } = useSearch();
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
