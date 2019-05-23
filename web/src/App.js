import React from 'react';
import { Box, Grommet } from 'grommet';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';
import Help from './pages/Help';


// If we do this...

// import lib from 'grommet';

// Then these are the same:

// const Grommet = lib.Grommet;
// const { Grommet } = lib;

const theme = {
  global: {
    colors: {
      brand: '#FDA7DF',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px'
    }
  }
};

const Body = (props) => (
  <Box
    fill='vertical'
    direction='column'
    flex overflow={{ horizontal: 'hidden' }}
    justify='center'
    border={{ color: 'brand', size: 'xlarge' }}
    pad='medium'
  >
    {/* This is the app's main body, where the Home and Game components are injected */}
    <Box>
      <Route align='center' path='/' exact component={Home} />
      <Route align='center' path='/help' component={Help} />
      <Route align='left' fill='vertical' path='/game' component={Game} />
    </Box>
  </Box>
)

function App() {
  return (
    <Grommet theme={theme} full>
      <Router>
        <Body />
      </Router>
    </Grommet>
  );
}

export default App;
