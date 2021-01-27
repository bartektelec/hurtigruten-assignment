import React from 'react';

import Excercise1 from './assets/exercise2.svg';

import SearchInput from './components/SearchInput.js';

function App() {
  return (
    <p>
      <SearchInput />
      <div className='canvas'>
        <img src={Excercise1} alt='' />
      </div>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  );
}

export default App;
