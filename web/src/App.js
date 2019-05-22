import React from 'react';
import { Box, Grommet } from 'grommet';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';


// If we do this...

// import lib from 'grommet';

// Then these are the same:

// const Grommet = lib.Grommet;
// const { Grommet } = lib;

const theme = {
  global: {
    colors: {
      brand: '#01FF70',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px'
    }
  }
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  return (
    <Grommet theme={theme}>
      <Router>
        <AppBar>
          <Link to='/'>Home</Link>
          <Link to='/game'>Game</Link>
        </AppBar>
          <Route path='/' exact component={Home} />
          <Route path='/game' component={Game} />
      </Router>
    </Grommet>
  );
}

export default App;
