import React from 'react';
import { Box, Button, Heading } from 'grommet';
import { Link } from 'react-router-dom';

export default class Help extends React.Component {
  render() {
    return (
      <Box direction="column">
        <Heading margin="small">Helloooooo :)</Heading>
        <Link to="/">
          <Button label="Back" margin="small" />
        </Link>
        <Box margin="medium" />
      </Box>
    );
  }
}
