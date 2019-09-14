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
        <div className="search-flex">
          <input type="text" className="search-bar" name="search" placeholder="Search by city"       onChange={e => setSearchQuery(e.target.value)}/>
          <button className="search-button">
            <i className="fas fa-search-location"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;