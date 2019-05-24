import React, { Component } from 'react';
import { Box, Grommet, Button, Anchor, Text } from 'grommet';
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

const Body = props => (
  <Box flex justify="center" align="left" margin="medium">
    {/* This is the app's main body, where the Home and Game components are injected */}
    <Route path="/" exact component={Home} />
    <Route path="/game" component={Game} />
    <Route path="/help" component={Help} />
  </Box>
);

const Footer = props => (
  <Box justify="end" align="center" margin="small">
    <Text size="small">
      Made with ❤ by A.C. and DMeechan⠀·⠀
      <Anchor
        href="https://github.com/AdrianaCucu/hex-web-app/"
        target="_blank"
      >
        GitHub
      </Anchor>
    </Text>
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
          <Box
            flex
            fill
            pad="small"
            direction="column"
            overflow={{ horizontal: 'hidden' }}
            border={{ color: 'brand', size: 'xlarge' }}
          >
            <ToggleThemeButton
              toggleTheme={this.toggleTheme.bind(this)}
              selectedTheme={selectedTheme}
            />
            <Body />
            <Footer />
          </Box>
        </Router>
      </Grommet>
    );
  }
}

export default App;
