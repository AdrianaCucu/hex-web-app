import React from 'react';
import { Box, Button, Heading } from 'grommet';
import { Link } from 'react-router-dom';

import Board from './Board';

export default class Game extends React.Component {
    render() {
        return (
            <Box
                flex
                fill
                border
                gap="medium"
                direction="row"
                align="center"
                justify="start"
            >

                <Box border width="medium" height="full" justify="center">
                    <Heading margin="small">
                        Hex
                    </Heading>

                    <Link to="/game">
                        <Button label="New Game" margin="small" />
                    </Link>

                    <Link to="/">
                        <Button label="Back" margin="small" />
                    </Link>
                </Box>

                <Box id="game" border width="xlarge" height="full">
                    Game
                    <Board />
                </Box>

                <Box border width="medium" height="full">
                    Moves history?
                </Box>
            </Box>
        );
    }
}
