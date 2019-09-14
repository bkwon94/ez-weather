import React from 'react';
import { useState } from 'react';
import './App.css';
import Information from './components/Information/Information';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {

  const [cityCode, setCityCode] = useState('');

  const findLocation = (query) => {
    // Proxy url to bypass CORS policy issue
    // Allows access to response data from the metaweather api
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://www.metaweather.com/api/location/search/?query=${query}`;
    fetch(proxyURL + url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        let data = result[0];
        setCityCode(data.woeid);
      });
  }


  return (
    <div className="App">
      <SearchBar findLocation={findLocation}/>
      <Information />
    </div>
  );
}

export default App;
