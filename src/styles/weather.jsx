import { css } from '@emotion/react';

const weatherStyle = css`
  & {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 3rem;
    background: linear-gradient(180deg, #f9fafb 0%, rgb(249 250 251 / 0%) 100%);
  }

  .weather-app-title {
    font-size: 1.5rem;
    font-weight: 1000;
  }

  .weather-header {
    padding-top: 0.5rem;
  }

  .weather-current-time {
    color: #6b7280;
  }

  .weather-city {
    padding-top: 0.5rem;
    font-size: 3rem;
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

  .weather-app-footer {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-top: auto;
  }

  .weather-app-footer a {
    color: #696969;
  }
`;

export default weatherStyle;
