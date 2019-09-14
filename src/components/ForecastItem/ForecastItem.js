import React from 'react';
// import { useState } from 'react';
import './ForecastItem.css';

const ForecastItem = ({date}) => {

  return (
    <div className="">
      {date.weather_state_name}
    </div>
  );
}

export default ForecastItem;