import React from 'react';
import { Box, Button } from 'grommet';

<<<<<<< HEAD
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
=======
import Hexagon from '../components/Hexagon';
import { hexagons } from '../helpers/themes';

function Tiles(props) {
  let board = [];

  for (let i = 0; i < props.size; i++) {
    let row = [];
    for (let j = 0; j < props.size; j++) {
      let randomColor =
        i + (j % 2) === 2 ? hexagons.playerOne : hexagons.playerTwo;
      randomColor = i % 3 === 2 ? hexagons.empty : randomColor;

      const hex = {
        row: i,
        column: j,
        label: '*',
        size: 32,
        color: randomColor,
        key: `tile-${i},${j}`,
      };

      row.push(
        <Hexagon
          color={hex.color}
          size={hex.size}
          row={hex.row}
          column={hex.column}
          label={hex.label}
          key={hex.key}
          onClick={() => props.onClick(i, j)}
        />
      );
>>>>>>> 930fdda9211a55752507b64964c3a6aa99ba8121
    }
    board.push(
      <Box direction="row" key={`row-${i}`}>
        {row}
      </Box>
    );
  }

<<<<<<< HEAD
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
=======
  return (
    <Box fill align="center" justify="center" size="small">
      {board}
    </Box>
  );
}

export default class Board extends React.Component {
  render() {
    return (
      <Tiles
        size={11}
        onClick={(i, j) => console.log(`Clicked meh at ${i}, ${j} :)`)}
      />
    );
  }
>>>>>>> 930fdda9211a55752507b64964c3a6aa99ba8121
}
