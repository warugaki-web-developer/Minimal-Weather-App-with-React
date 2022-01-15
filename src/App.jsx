import { Global } from '@emotion/react';
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
      <h1>Minimal Weather App with React</h1>
      <div className="weather">
        <p>{weatherData.current_weather.time}</p>
      </div>
    </>
  );
};

export default App;
