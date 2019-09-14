import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Information from './components/Information/Information';
import SearchBar from './components/SearchBar/SearchBar';


const App = () => {

  const [cityCode, setCityCode] = useState('');
  const [currentWeather, setCurrentWeather] = useState('');
  const [fiveDayForecast, setFiveDayForecast] = useState('');
    // Proxy url to bypass CORS policy issue
    // Allows access to response data from the metaweather api
  const proxyURL = 'https://cors-anywhere.herokuapp.com/';
  let url;

  useEffect(() => {
    getCurrentWeather(cityCode);
  }, [cityCode]);

  const fetchData = (query, code, future) => {

    if (!code && !future) {
      url = `https://www.metaweather.com/api/location/search/?query=${query}`;
    } else if (code) {
      url =`https://www.metaweather.com/api/location/${code}/`;
    } else {
      // url = `https://www.metaweather.com/api/location/search/?query=${query}`;
    }
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
        if (query) {
          setCityCode(result[0].woeid);
        } else if (code) {
          setCurrentWeather(result.consolidated_weather[0]);
        }

      });
  }

  const getCurrentWeather = id => {
    fetchData(null, id, null);
  }

  return (
    <div className="App">
      <SearchBar fetchData={fetchData}/>
      <Information current={currentWeather}/>
    </div>
  );
}

export default App;
