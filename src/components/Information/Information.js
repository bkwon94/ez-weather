import React from 'react';
import './Information.css';

const Information = ({ current, city }) => {
  if (current) {
    return (
      <div>
        <h1>{city}</h1>
        <div><img src={`https://www.metaweather.com/static/img/weather/${current.weather_state_abbr}.svg`} alt="logo"></img></div>
        <div>
          {current.weather_state_name}
        </div>
        <div>
          {Math.round(current.the_temp)}
        </div>
        <div>
          High: {Math.round(current.max_temp)}
        </div>
        <div>
          Low: {Math.round(current.min_temp)}
        </div>
        <div>
          Wind Speed: {Math.round(current.wind_speed)}
        </div>
        <div>
          Wind Direction: {Math.round(current.wind_direction)}
        </div>
        <div>
          Air Pressure: {Math.round(current.air_pressure)}
        </div>
        <div>
          Humidity: {current.humidity}
        </div>
        <div>
          Visibility: {Math.round(current.visibility)}
        </div>
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }
}

export default Information;