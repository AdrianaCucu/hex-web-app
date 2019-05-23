import React from 'react';
import { Box, Grommet } from 'grommet';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { dark, light } from './helpers/themes';
import Home from './pages/Home';
import Game from './pages/Game';
import Help from './pages/Help';

/*
  These do the same thing:
  const Box = grommet.Box;
  const { Box } = grommet;
*/

const Body = (props) => (
  <Box direction='row' flex overflow={{horizontal: 'hidden'}}>
    <Box flex align='center' justify='center'>
      {/* This is the app's main body, where the Home and Game components are injected */}
      <Route path='/' exact component={Home} />
      <Route path='/game' component={Game} />
      <Route path='/help' component={Help} />
    </Box>
  </Box>
)

function App() {
  return (
    <Grommet theme={dark} full>
      <Router>
        <Body />
      </Router>
    </Grommet>
  );
}

export default App;
