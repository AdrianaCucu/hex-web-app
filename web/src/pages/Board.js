import React from 'react';
import { Box, Button } from 'grommet';

import Hexagon from '../components/Hexagon';
import { hexagons } from '../helpers/themes';

// function Hex(props) {
//   return <div class="hexagon" onClick={props.onClick} />;
// }

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
    }
    board.push(
      <Box direction="row" key={`row-${i}`}>
        {row}
      </Box>
    );
  }

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
}
