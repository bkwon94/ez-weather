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
          {current.the_temp}
        </div>
        <div>
          {current.min_temp}
        </div>
        <div>
          {current.max_temp}
        </div>
        <div>
          {current.wind_speed}
        </div>
        <div>
          {current.wind_direction}
        </div>
        <div>
          {current.air_pressure}
        </div>
        <div>
          {current.humidity}
        </div>
        <div>
          {current.visibility}
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