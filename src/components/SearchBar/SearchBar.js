import React from 'react';
import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ fetchData, resetForecast }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fetchData(searchQuery, null, null);
    resetForecast([]);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="Search" onChange={e => setSearchQuery(e.target.value)}/>
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;