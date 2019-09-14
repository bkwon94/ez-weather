import React from 'react';
import './Information.css';

const Information = ({ current, city }) => {
  if (current) {
    return (
      <div className="info-container">
        <h1>{city}</h1>
        <div>
          {Math.round(current.the_temp)}&#8451;
        </div>

        <div>
          {current.weather_state_name}
          <img src={`https://www.metaweather.com/static/img/weather/${current.weather_state_abbr}.svg`} alt="logo"></img>
        </div>
        <div>
          High: {Math.round(current.max_temp)}
        </div>
        <div>
          Low: {Math.round(current.min_temp)}
        </div>
        <div>
          Wind Speed: {Math.round(current.wind_speed)} mph
        </div>
        <div>
          Wind Direction: {current.wind_direction_compass}
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