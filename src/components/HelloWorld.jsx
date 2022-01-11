import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const style = css`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    color: #696969;
  }

  .title {
    margin: 0;
  }

  .read {
    font-size: 24px;
    color: #aaa;
  }
`;

const Helloworld = ({ text }) => (
  <div css={style}>
    <h1 className="title">Vite + React + Storybook</h1>
    <p className="read">hello {text}!!</p>
  </div>
);

Helloworld.propTypes = {
  text: PropTypes.string,
};

Helloworld.defaultProps = {
  text: 'world',
};

export default Helloworld;
