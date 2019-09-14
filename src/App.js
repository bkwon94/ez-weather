import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Information from './components/Information/Information';
import SearchBar from './components/SearchBar/SearchBar';
import Forecast from './components/Forecast/Forecast';


const App = () => {

  const [cityCode, setCityCode] = useState('');
  const [cityName, setCityName] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [fiveDayForecast, setFiveDayForecast] = useState([]);
    // Proxy url to bypass CORS policy issue
    // Allows access to response data from the metaweather api
  const proxyURL = 'https://cors-anywhere.herokuapp.com/';
  let url;

  useEffect(() => {
    getCurrentWeather(cityCode);
    getForecast(cityCode);
  }, [cityCode]);

  // Main data fetching function
  const fetchData = (query, id, date) => {

    if (!id && !date) {
      url = `https://www.metaweather.com/api/location/search/?query=${query}`;
    } else if (id && !date) {
      url =`https://www.metaweather.com/api/location/${id}/`;
    } else {
      var year = date.getUTCFullYear();
      var month = date.getUTCMonth() + 1;
      var day = date.getUTCDate();
      console.log(year, month, day);
      url = `https://www.metaweather.com/api/location/${id}/${year}/${month}/${day}`
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
        if (query) {
          let code = result[0].woeid;
          setCityCode(code);
        } else if (id && !date) {
          let weatherData = result.consolidated_weather[0]
          let name = result.title;
          setCityName(name);
          setCurrentWeather(weatherData);
        } else if (date) {
          let forecastData = result[0];
          forecastData.date = day;
          setFiveDayForecast(prevForecast => [...prevForecast, forecastData]);
        }
      });
  }

  const getCurrentWeather = id => {
    fetchData(null, id, null);
  }

  const getForecast = id => {
    let date = new Date();
    for (let i = 0; i < 5; i++) {
      date.setDate(date.getDate() + 1);
      fetchData(null, id, date);
    }
  }

  return (
    <div className="App">
      <SearchBar fetchData={fetchData} resetForecast={setFiveDayForecast}/>
      {/* <Information current={currentWeather} city={cityName}/> */}
      {currentWeather ? <Information current={currentWeather} city={cityName}/> :
      <div className="app-info-container">
        <div className="app-header">EZ WEATHER <i className="fas fa-sun"></i> </div>
        <div className="app-intro">Use the search bar above to find your local weather!</div>
      </div>}
      {/* <Forecast forecastData={fiveDayForecast}/> */}
      {fiveDayForecast.length === 5 ? <Forecast forecastData={fiveDayForecast}/> : <div></div>}
    </div>
  );
}

export default App;
