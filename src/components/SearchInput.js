import React from 'react';
import Magnifier from '../assets/magnifying-glass.svg';
import Cross from '../assets/cross.svg';

const SearchInput = ({ value, onInput, onSearch }) => {
  return (
    <form onSubmit={onSearch} className='search'>
      <input
        type='text'
        placeholder='Search'
        value={value}
        onChange={onInput}
        className='search__field'
      />
      <button type='submit' disabled={!value} className='search__btn'>
        <img
          className='search__btn-icon'
          src={value ? Cross : Magnifier}
          alt='Clear search field'
        />
      </button>
    </form>
  );
};

export default SearchInput;
