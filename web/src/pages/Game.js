import React from 'react';
import { Box, Button, Heading } from 'grommet';
import { Link } from 'react-router-dom';

import Board from './Board';

export default class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            history: [{
                hexes: Array(11).fill(Array(11).fill(null)),
            }],

            stepNumber: 0,

            xIsNext: true,
        };
    }

    handleClick(i, j) {
        const { history } = this.state;
        
        const historyRows = history.slice(0, this.state.stepNumber + 1);
        let columns = [];
        for (let j = 0; j < historyRows.length; j++) {
            
        }
        const current = history[history.length - 1];
        const rows = current.hexes.slice();
    }

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
