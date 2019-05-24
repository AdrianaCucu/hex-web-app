import React from 'react';
import { Box, Button, Heading } from 'grommet';
import { Link } from 'react-router-dom';
import { Gamepad } from 'grommet-icons';

export default class Home extends React.Component {
  render() {
    const icon = <Gamepad />;

    return (
      <React.Fragment>
        <Heading margin="small">
          Hex
        </Heading>

        <Link to="/game">
          <Button
            primary
            icon={icon}
            label="Start Game"
            margin="small"
            reverse
          />
        </Link>
        <Link to="/help">
          <Button label="Help" margin="small" />
        </Link>
      </React.Fragment>
    );
  }
}
