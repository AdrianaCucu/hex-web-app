import React from 'react';
import { Box, Button } from 'grommet';

function Tiles(props) {
    return (
        <Box fill align="center" justify="center" size="small">
            <Box direction="row">
                <Button label="0,0" />
                <Button label="0,1" />
                <Button label="0,2" />
                <Button label="0,3" />
                <Button label="0,4" />
                <Button label="0,5" />
                <Button label="0,6" />
                <Button label="0,7" />
                <Button label="0,8" />
                <Button label="0,9" />
                <Button label="0,10" />
            </Box>
            <Box direction="row">
                <Button label="1,0" />
                <Button label="1,1" />
                <Button label="1,2" />
                <Button label="1,3" />
                <Button label="1,4" />
                <Button label="1,5" />
                <Button label="1,6" />
                <Button label="1,7" />
                <Button label="1,8" />
                <Button label="1,9" />
                <Button label="1,10" />
            </Box>
            <Box direction="row">
                <Button label="2,0" />
                <Button label="2,1" />
                <Button label="2,2" />
                <Button label="2,3" />
                <Button label="2,4" />
                <Button label="2,5" />
                <Button label="2,6" />
                <Button label="2,7" />
                <Button label="2,8" />
                <Button label="2,9" />
                <Button label="2,10" />
            </Box>
            <Box direction="row">
                <Button label="3,0" />
                <Button label="3,1" />
                <Button label="3,2" />
                <Button label="3,3" />
                <Button label="3,4" />
                <Button label="3,5" />
                <Button label="3,6" />
                <Button label="3,7" />
                <Button label="3,8" />
                <Button label="3,9" />
                <Button label="3,10" />
            </Box>
            <Box direction="row">
                <Button label="4,0" />
                <Button label="4,1" />
                <Button label="4,2" />
                <Button label="4,3" />
                <Button label="4,4" />
                <Button label="4,5" />
                <Button label="4,6" />
                <Button label="4,7" />
                <Button label="4,8" />
                <Button label="4,9" />
                <Button label="4,10" />
            </Box>
            <Box direction="row">
                <Button label="5,0" />
                <Button label="5,1" />
                <Button label="5,2" />
                <Button label="5,3" />
                <Button label="5,4" />
                <Button label="5,5" />
                <Button label="5,6" />
                <Button label="5,7" />
                <Button label="5,8" />
                <Button label="5,9" />
                <Button label="5,10" />
            </Box>
            <Box direction="row">
                <Button label="6,0" />
                <Button label="6,1" />
                <Button label="6,2" />
                <Button label="6,3" />
                <Button label="6,4" />
                <Button label="6,5" />
                <Button label="6,6" />
                <Button label="6,7" />
                <Button label="6,8" />
                <Button label="6,9" />
                <Button label="6,10" />
            </Box>
            <Box direction="row">
                <Button label="7,0" />
                <Button label="7,1" />
                <Button label="7,2" />
                <Button label="7,3" />
                <Button label="7,4" />
                <Button label="7,5" />
                <Button label="7,6" />
                <Button label="7,7" />
                <Button label="7,8" />
                <Button label="7,9" />
                <Button label="7,10" />
            </Box>
            <Box direction="row">
                <Button label="8,0" />
                <Button label="8,1" />
                <Button label="8,2" />
                <Button label="8,3" />
                <Button label="8,4" />
                <Button label="8,5" />
                <Button label="8,6" />
                <Button label="8,7" />
                <Button label="8,8" />
                <Button label="8,9" />
                <Button label="8,10" />
            </Box>
            <Box direction="row">
                <Button label="9,0" />
                <Button label="9,1" />
                <Button label="9,2" />
                <Button label="9,3" />
                <Button label="9,4" />
                <Button label="9,5" />
                <Button label="9,6" />
                <Button label="9,7" />
                <Button label="9,8" />
                <Button label="9,9" />
                <Button label="9,10" />
            </Box>
            <Box direction="row" >
                <Button label="10,0" />
                <Button label="10,1" />
                <Button label="10,2" />
                <Button label="10,3" />
                <Button label="10,4" />
                <Button label="10,5" />
                <Button label="10,6" />
                <Button label="10,7" />
                <Button label="10,8" />
                <Button label="10,9" />
                <Button label="10,10" />
            </Box>
        </Box>
    );
};

export default class Board extends React.Component {
    render() {
        return (
            <Tiles />
        );
    };
}