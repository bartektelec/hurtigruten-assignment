import React, { useState, useCallback } from 'react';

import Excercise1 from './assets/exercise2.svg';

import SearchInput from './components/SearchInput.js';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearch = useCallback(
    e => {
      e.preventDefault();
      setSearchQuery('');
    },
    [searchQuery]
  );

  return (
    <div className='canvas'>
      <SearchInput
        value={searchQuery}
        onInput={e => setSearchQuery(e.currentTarget.value)}
        onSearch={onSearch}
      />
      {/* <img src={Excercise1} alt='' /> */}
    </div>
  );
}

export default App;
