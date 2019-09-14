import React from 'react';
import { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <input type="text" name="search" placeholder="Search" onChange={e => setSearchQuery(e.target.value)}/>
      <button>Search</button>
    </div>
  );
}

export default SearchBar;