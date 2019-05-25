import React from 'react';
import { Box, Button } from 'grommet';

function Hex(props) {
    return (
        <Button row={props.row} column={props.column} label={props.label} onClick={props.onClick} />
    );
}

function Tiles(props) {

    let board = [];

    for (let i = 0; i < props.size; i++) {
        let row = [];
        for (let j = 0; j < props.size; j++) {
            const hex = { row: i, column: j, label: "*" }
            row.push(<Hex row={hex.row} column={hex.column} label={hex.label} onClick={() => this.props.onClick(i, j)} />);
        }
        board.push(<Box direction="row">{row}</Box>);
    }

    return <Box fill align="center" justify="center" size="small">{board}</Box>;
}

export default class Board extends React.Component {
    render() {
        return (
            <Tiles size={11} />
        );
    };
}
