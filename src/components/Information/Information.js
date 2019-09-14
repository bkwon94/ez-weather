import React from 'react';
import './Information.css';

const Information = ({ current }) => {
  return (
    <div>
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
}

export default Information;