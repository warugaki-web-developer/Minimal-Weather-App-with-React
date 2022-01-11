import { Global } from '@emotion/react';

import globalStyle from './styles/global';

const App = () => (
  <>
    <Global styles={globalStyle} />
    <h1>Minimal Weather App with React</h1>
  </>
);

export default App;
