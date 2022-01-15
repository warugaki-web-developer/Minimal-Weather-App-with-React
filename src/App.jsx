import { Global } from '@emotion/react';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

import globalStyle from './styles/global';
import weatherStyle from './styles/weather';

const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const weatherConditions = [
    {
      conditionType: 'sun',
      conditionCode: [0, 1],
    },
    {
      conditionType: 'cloud',
      conditionCode: [2, 3, 45, 48],
    },
    {
      conditionType: 'rain',
      conditionCode: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67],
    },
    {
      conditionType: 'snow',
      conditionCode: [71, 73, 75, 77, 80, 81, 82, 85, 86],
    },
    {
      conditionType: 'thunderstorm',
      conditionCode: [95, 96, 99],
    },
  ];

  const getConditionType = (code) => {
    const conditions = weatherConditions.filter((value, index, array) =>
      value.conditionCode.includes(code),
    );

    return conditions.length ? conditions[0].conditionType : null;
  };

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
      <div className="weather" css={weatherStyle}>
        <h1 className="weather-app-title">Minimal Weather App with React</h1>
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
            {getConditionType(weatherData.current_weather.weathercode)}
          </p>
        </div>
        <div className="weather-app-footer">
          <small>
            <a
              href="https://open-meteo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weather data by Open-Meteo.com
            </a>
          </small>
        </div>
      </div>
    </>
  );
};

export default App;
