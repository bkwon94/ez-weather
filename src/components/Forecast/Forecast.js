import React from 'react';
// import { useState } from 'react';
import ForecastItem from '../ForecastItem/ForecastItem';
import './Forecast.css';

const Forecast = ({ forecastData }) => {
  // Sort list in correct order of dates
  // MVP solution to the asynchronous nature of api calls -> before this the five day forecast would never be in order
  const sortByDate = (dataList) => {
    return dataList.sort((a, b) => a.date - b.date);
  };
  sortByDate(forecastData);
  
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