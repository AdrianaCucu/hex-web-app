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

const Body = props => (
  <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
    <Box flex align="center" justify="center">
      {/* This is the app's main body, where the Home and Game components are injected */}
      <Route path="/" exact component={Home} />
      <Route path="/game" component={Game} />
      <Route path="/help" component={Help} />
    </Box>
  </Box>
);

const themes = {
  dark: dark,
  light: light,
};

const ToggleThemeButton = props =>
  props.theme === 'light' ? <Moon /> : <Sun />;

class App extends Component {
  state = {
    selectedTheme: 'light',
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
          <Button onClick={this.toggleTheme.bind(this)} margin='medium'>
            <ToggleThemeButton theme={selectedTheme} />
          </Button>
          <Body />
        </Router>
      </Grommet>
    );
  }
}

export default App;
