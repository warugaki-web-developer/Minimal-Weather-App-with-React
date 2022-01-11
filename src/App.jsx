import { Global } from '@emotion/react';

import Helloworld from './components/HelloWorld';
import globalStyle from './styles/global';

const App = () => (
  <>
    <Global styles={globalStyle} />
    <Helloworld />
  </>
);

export default App;
