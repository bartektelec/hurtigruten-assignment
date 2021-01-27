import React from 'react';
import Magnifier from '../assets/magnifying-glass.svg';

const SearchInput = () => {
  return (
    <div className='search'>
      <input type='text' placeholder='Search' className='search__field' />
      <button className='search__btn'>
        <img className='search__btn-icon' src={Magnifier} alt='Search' />
      </button>
    </div>
  );
};

export default SearchInput;
