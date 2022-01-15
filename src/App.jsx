import { Global } from '@emotion/react';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

import globalStyle from './styles/global';

const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=34.69374&longitude=135.50218&hourly=temperature_2m&current_weather=true&timezone=Asia%2FTokyo`,
    )
      .then((response) => response.json())
      .then((resopnseJson) => {
        setWeatherData(resopnseJson);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Global styles={globalStyle} />
      <div className="weather">
        <h1 className="app-title">Minimal Weather App with React</h1>
        <div className="weather-header">
          <p className="weather-current-time">
            {format(new Date(weatherData.current_weather.time), 'yyyy.MM.dd p')}
          </p>
          <p className="weather-city">OSAKA</p>
        </div>
        <div className="weather-body">
          <p className="weather-temperature">
            <span className="weather-temperature-text">
              {weatherData.current_weather.temperature}
            </span>
            <span className="weather-temperature-unit">
              {weatherData.hourly_units.temperature_2m}
            </span>
          </p>
          <p className="weather-code">
            {weatherData.current_weather.weathercode}
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
