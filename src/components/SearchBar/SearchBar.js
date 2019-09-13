import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div>
      <input type="text" name="search" placeholder="Search"/>
      <button>Search</button>
    </div>
  );
}

export default SearchBar;