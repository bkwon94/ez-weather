import React from 'react';
import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ findLocation }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    findLocation(searchQuery);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="Search" onChange={e => setSearchQuery(e.target.value)}/>
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;