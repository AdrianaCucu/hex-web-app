import React, { Component } from 'react';
import { Box, Grommet, Button } from 'grommet';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { dark, light } from './helpers/themes';
import Home from './pages/Home';
import Game from './pages/Game';
import Help from './pages/Help';

import { Moon, Sun } from './components/icons';

/*
  These do the same thing:
  const Box = grommet.Box;
  const { Box } = grommet;
*/

const themes = {
  dark: dark,
  light: light,
};

const ToggleThemeButton = ({ toggleTheme, selectedTheme }) => (
  <Box>
    <Button onClick={toggleTheme.bind(this)} margin="medium">
      {selectedTheme === 'light' ? <Moon /> : <Sun />}
    </Button>
  </Box>
);

//  <Box
//    fill='vertical'
//    direction='column'
//    flex overflow={{ horizontal: 'hidden' }}
//    justify='center'
//    border={{ color: 'brand', size: 'xlarge' }}
//    pad='medium'
//  >
//    {/* This is the app's main body, where the Home and Game components are injected */}
//    <Box>
//      <Route align='center' path='/' exact component={Home} />
//      <Route align='center' path='/help' component={Help} />
//      <Route align='left' fill='vertical' path='/game' component={Game} />
//    </Box>

const Body = props => (
  <Box flex justify="center">
    {/* This is the app's main body, where the Home and Game components are injected */}
    <Route path="/" exact component={Home} />
    <Route path="/game" component={Game} />
    <Route path="/help" component={Help} />
  </Box>
);

class App extends Component {
  state = {
    selectedTheme: 'dark',
  };

  toggleTheme() {
    this.setState({
      selectedTheme: this.state.selectedTheme === 'light' ? 'dark' : 'light',
    });
  }

  render() {
    const { selectedTheme } = this.state;
    const theme = themes[selectedTheme];

    return (
      <Grommet theme={theme} full>
        <Router>
          <Box direction="row" flex overflow={{ horizontal: 'hidden' }} fill>
            <ToggleThemeButton
              toggleTheme={this.toggleTheme.bind(this)}
              selectedTheme={selectedTheme}
            />
            <Body />
          </Box>
        </Router>
      </Grommet>
    );
  }
}

export default App;
