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

        <div className="details">
          <div className="col-1">
            <div className="section">
              <div className="section-title">Conditions</div>
              <div className="section-info">{current.weather_state_name}</div>
            </div>

            <div className="section">
              <div className="section-title">High / Low</div>
              <div className="section-info">{Math.round(current.max_temp)}&deg; / {Math.round(current.min_temp)}&deg;</div>
            </div>

            <div className="section">
              <div className="section-title">Wind</div>
              <div className="section-info">{current.wind_direction_compass} {Math.round(current.wind_speed)} mph</div>
            </div>
          </div>

          <div className="col-2">
            <div className="section">
              <div className="section-title">Air Pressure</div>
              <div className="section-info">{Math.round(current.air_pressure)} mbar</div>
            </div>

            <div className="section">
              <div className="section-title">Humidity</div>
              <div className="section-info">{current.humidity}%</div>
            </div>

            <div className="section">
              <div className="section-title">Visibility</div>
              <div className="section-info">{Math.round(current.visibility)} mi</div>
            </div>
          </div>

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