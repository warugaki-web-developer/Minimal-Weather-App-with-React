import { css } from '@emotion/react';

const weatherStyle = css`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 48px;
    background: linear-gradient(180deg, #f9fafb 0%, rgb(249 250 251 / 0%) 100%);
  }

  .weather-app-title {
    font-size: 16px;
    font-weight: 1000;
  }

  .weather-header {
    padding-top: 48px;
  }

  .weather-current-time {
    color: #6b7280;
  }

  .weather-city {
    font-size: 48px;
    font-weight: 800;
    line-height: 1;
  }

  .weather-body {
  }

  .weather-temperature {
    font-weight: 800;
    line-height: 1;
  }

  .weather-temperature-text {
    font-size: 96px;
  }

  .weather-temperature-unit {
    font-size: 48px;
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
