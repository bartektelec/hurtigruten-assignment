import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <ul className='results'>
      {results &&
        results.map(ship => (
          <li className='results__item' key={ship.id}>
            {ship.name}
          </li>
        ))}
    </ul>
  );
};

export default SearchResults;
