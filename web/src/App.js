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
      brand: '#FDA7DF',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px'
    }
  }
};

const NavBar = (props) => (
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

const Body = (props) => (
  <Box direction='row' flex overflow={{horizontal: 'hidden'}}>
    <Box flex align='center' justify='center'>
      {/* This is the app's main body, where the Home and Game components are injected */}
      <Route path='/' exact component={Home} />
      <Route path='/game' component={Game} />
    </Box>
  </Box>
)

function App() {
  return (
    <Grommet theme={theme} full>
      <Router>
        <NavBar>
          <Link to='/'>Home</Link>
          <Link to='/game'>Game</Link>
        </NavBar>
        <Body />
      </Router>
    </Grommet>
  );
}

export default App;
