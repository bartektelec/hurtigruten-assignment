import React from 'react';

import Search from './components/Search';

import useSearch from './hooks/useSearch';

function App() {
  const shipSearch = useSearch();

  return (
    <div className='container'>
      <Search {...shipSearch} />
    </div>
  );
}

export default App;
