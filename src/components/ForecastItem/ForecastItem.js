import React from 'react';
// import { useState } from 'react';
import './ForecastItem.css';

const ForecastItem = ({date}) => {

  return (
    <div className="box">
      <img src={`https://www.metaweather.com/static/img/weather/${date.weather_state_abbr}.svg`} alt="logo"/>
      <div>
        {Math.round(date.max_temp)}&deg; / {Math.round(date.min_temp)}&deg;
      </div>
      <div>
        {date.wind_direction_compass} {Math.round(date.wind_speed)} MPH
      </div>
      <div>
        Air Pressure: {Math.round(date.air_pressure)}
      </div>
      <div>
        Humidity: {date.humidity}%
      </div>
      <div>
        Visibility: {Math.round(date.visibility)}
      </div>
    </div>
  );
}

export default ForecastItem;