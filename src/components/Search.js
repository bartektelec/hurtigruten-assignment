import React from 'react';
import SearchResults from './SearchResults';
import SearchInput from './SearchInput';

const Search = ({ searchQuery, setSearchQuery, results }) => {
  return (
    <>
      <SearchInput value={searchQuery} setValue={setSearchQuery} />
      <SearchResults results={results} />
    </>
  );
};

export default Search;
