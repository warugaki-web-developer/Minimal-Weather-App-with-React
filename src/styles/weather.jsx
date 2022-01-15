import { css } from '@emotion/react';

const weatherStyle = css`
  & {
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    min-height: 100vh;
    padding: 1.5rem;
    margin: auto;
    background: linear-gradient(180deg, #f9fafb 0%, rgb(249 250 251 / 0%) 100%);
  }

  .weather-app-title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 1000;
  }

  .weather-header {
    padding-top: 2rem;
  }

  .weather-current-time {
    color: #6b7280;
  }

  .weather-city {
    padding-top: 0.5rem;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1;
  }

  .weather-body {
    padding-top: 1rem;
  }

  .weather-temperature {
    line-height: 1;
  }

  .weather-temperature-text {
    font-size: 6rem;
    font-weight: 800;
  }

  .weather-temperature-unit {
    font-size: 3rem;
    font-weight: 1000;
  }

  .weather-code {
    font-size: 1.5rem;
  }

  .weather-app-footer {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    margin-top: auto;
    text-align: center;
  }

  .weather-app-footer a {
    color: #696969;
  }
`;

export default weatherStyle;
