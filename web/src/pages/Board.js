import React from 'react';
import { Box, Button } from 'grommet';

function Hex(props) {
    return (
        <Button className="hex" onClick={props.onClick}>
            {props.value}
        </Button>
    );
}

export default class Board extends React.Component {

    renderHex(i) {
        return (
            <Hex
                value={this.props.hexes[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    getRow(i) {
        let row = [];
        for (let j = 0; j < 11; j++) {
            row.push(this.renderHex(11 * i + j))
        }
        return row;
    }

    getHexes() {
        let board = [];
        for (let i = 0; i < 11; i++) {
            const row = this.getRow(i);
            board.push(<div className="board-row">{row}</div>)
        }
        return board;
    }

    render() {
        return (
            <div>
                {this.getHexes()}
            </div>
        );
    }
}
