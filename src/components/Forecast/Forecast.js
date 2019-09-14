import React from 'react';
// import { useState } from 'react';
import ForecastItem from '../ForecastItem/ForecastItem';
import './Forecast.css';

const Forecast = ({ forecastData }) => {
  console.log(forecastData);
  return (
    <div className="forecast-container">
      {
        forecastData.map((date, index) => {
          return <ForecastItem date={date} key={index}/>
        })
      }
    </div>
  );
}

export default Forecast;