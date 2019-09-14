import React from 'react';
import './Information.css';

const Information = ({ current, city }) => {
  if (current) {
    return (
      <div className="info-container">
        <h1>{city}</h1>
        <div className="current-degree">
          {Math.round(current.the_temp)}&deg;
        </div>
        <img src={`https://www.metaweather.com/static/img/weather/${current.weather_state_abbr}.svg`} alt="logo"></img>

        <div>
          {current.weather_state_name}
        </div>
        <div>
          {Math.round(current.max_temp)} / {Math.round(current.min_temp)}
        </div>

        <div>
          Wind: {current.wind_direction_compass} {Math.round(current.wind_speed)} MPH
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

        <div>See 5 Day Forecast</div>
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }
}

export default Information;