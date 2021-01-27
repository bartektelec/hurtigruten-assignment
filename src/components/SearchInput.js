import React from 'react';
import Magnifier from '../assets/magnifying-glass.svg';
import Cross from '../assets/cross.svg';

const SearchInput = ({ value, setValue }) => {
  return (
    <form onSubmit={e => e.preventDefault()} className='search'>
      <label htmlFor='searchInput' className='sr-only'>
        Search
      </label>
      <input
        type='text'
        placeholder='Search'
        required
        id='searchInput'
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        className='search__field'
      />
      <button
        type='reset'
        disabled={!value}
        onClick={() => setValue('')}
        className='search__btn'
      >
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
