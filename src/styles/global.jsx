import { css } from '@emotion/react';
import 'sanitize.css'; // reset css

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900;1000&display=swap');

  body {
    margin: 0;
    font-family: Nunito, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #111827;
  }

  p {
    margin: 0;
  }
`;

export default globalStyle;
