import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Information from './components/Information/Information';
import SearchBar from './components/SearchBar/SearchBar';
import Forecast from './components/Forecast/Forecast';


const App = () => {

  const [cityCode, setCityCode] = useState('');
  const [cityName, setCityName] = useState('');
  const [currentWeather, setCurrentWeather] = useState('');
  const [fiveDayForecast, setFiveDayForecast] = useState('');
    // Proxy url to bypass CORS policy issue
    // Allows access to response data from the metaweather api
  const proxyURL = 'https://cors-anywhere.herokuapp.com/';
  let url;

  useEffect(() => {
    getCurrentWeather(cityCode);
  }, [cityCode]);

  const fetchData = (query, id, future) => {

    if (!id && !future) {
      url = `https://www.metaweather.com/api/location/search/?query=${query}`;
    } else if (id) {
      url =`https://www.metaweather.com/api/location/${id}/`;
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
          let code = result[0].woeid;
          setCityCode(code);
        } else if (id) {
          console.log(result);
          let weatherData = result.consolidated_weather[0]
          let name = result.title;
          setCityName(name);
          setCurrentWeather(weatherData);
        }
      });
  }

  const getCurrentWeather = id => {
    fetchData(null, id, null);
  }

  return (
    <div className="App">
      <SearchBar fetchData={fetchData}/>
      <Information current={currentWeather} city={cityName}/>
      <Forecast />
    </div>
  );
}

export default App;
