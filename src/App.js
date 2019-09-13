import React from 'react';
import './App.css';
import Information from './components/Information/Information';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  return (
    <div className="App">
      <SearchBar />
      <Information />
    </div>
  );
}

export default App;
