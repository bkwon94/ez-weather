import React from 'react';
import './ForecastItem.css';

const ForecastItem = ({date}) => {
  const formatDate = currentDate => {
    const months = {
      '01': 'January',
      '02': 'February',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December'
    }
    let unformattedDate = currentDate.applicable_date;
    // '2019-09-15' is the unformatted date so we can access the month and day easily
    let month = unformattedDate[5] + unformattedDate[6];
    let day = unformattedDate[8] + unformattedDate[9];
    let formatMonth = months[month];
    return `${formatMonth} ${day}`;
  }
  return (
    <div className="box">
      <h4>{formatDate(date)}</h4>
      <img src={`https://www.metaweather.com/static/img/weather/${date.weather_state_abbr}.svg`} alt="logo"/>

      <div className="item-temp">
        {Math.round(date.max_temp)}&deg; / {Math.round(date.min_temp)}&deg;
      </div>
      <div className="item-info">
        <div>
          {date.wind_direction_compass} {Math.round(date.wind_speed)} MPH
        </div>
        <div>
          Air Pressure: {Math.round(date.air_pressure)} mbar
        </div>
        <div>
          Humidity: {date.humidity}%
        </div>
        <div>
          Visibility: {Math.round(date.visibility)} mi
        </div>
      </div>

    </div>
  );
}

export default ForecastItem;