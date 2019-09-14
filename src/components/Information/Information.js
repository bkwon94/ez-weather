import React from 'react';
import './Information.css';

const Information = ({ current }) => {
  if (current) {
    return (
      <div>
        <div><img src={`https://www.metaweather.com/static/img/weather/${current.weather_state_abbr}.svg`} alt="logo"></img></div>
        <div>
          {current.weather_state_name}
        </div>
        <div>
          {Math.round(current.the_temp)}
        </div>
        <div>
          {Math.round(current.min_temp)}
        </div>
        <div>
          {Math.round(current.max_temp)}
        </div>
        <div>
          {Math.round(current.wind_speed)}
        </div>
        <div>
          {Math.round(current.wind_direction)}
        </div>
        <div>
          {Math.round(current.air_pressure)}
        </div>
        <div>
          {current.humidity}
        </div>
        <div>
          {Math.round(current.visibility)}
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