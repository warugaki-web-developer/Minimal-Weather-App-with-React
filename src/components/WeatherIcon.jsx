import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

import IconDayClouds from '../images/icon-day-clouds.png';
import IconDayRain from '../images/icon-day-rain.png';
import IconDaySnow from '../images/icon-day-snow.png';
import IconDayStorm from '../images/icon-day-storm.png';
import IconDaySun from '../images/icon-day-sun.png';

const style = css`
  & img {
    width: 100%;
  }
`;

const WeatherIcon = ({ conditionType }) => (
  <div css={style}>
    {conditionType === 'sun' && (
      <p>
        <img src={IconDaySun} alt="" />
      </p>
    )}
    {conditionType === 'cloud' && (
      <p>
        <img src={IconDayClouds} alt="" />
      </p>
    )}
    {conditionType === 'rain' && (
      <p>
        <img src={IconDayRain} alt="" />
      </p>
    )}
    {conditionType === 'snow' && (
      <p>
        <img src={IconDaySnow} alt="" />
      </p>
    )}
    {conditionType === 'thunderstorm' && (
      <p>
        <img src={IconDayStorm} alt="" />
      </p>
    )}
  </div>
);

WeatherIcon.propTypes = {
  conditionType: PropTypes.string,
};

WeatherIcon.defaultProps = {
  conditionType: '',
};

export default WeatherIcon;
