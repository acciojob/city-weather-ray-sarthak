import React from 'react';

const WeatherData = ({ data }) => {
  const { name, weather, main, wind } = data;

  return (
    <div>
      <h2>Weather in {name}</h2>
      {weather && weather.length > 0 && (
        <div>
          <p>Current weather: {weather[0].description}</p>
          <p>Temperature: {main.temp} K</p>
          <p>Feels like: {main.feels_like} K</p>
          <p>Pressure: {main.pressure} hPa</p>
          <p>Humidity: {main.humidity}%</p>
          <p>Wind Speed: {wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherData;
