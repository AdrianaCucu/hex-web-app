import React from 'react';
import { Box, Button } from 'grommet';

import HexButton from '../components/Hexagon';

function Hex(props) {
    return <HexButton size={48} color={props.value} onClick={props.onClick} />
//   return <Button className="hex" label={props.value} onClick={props.onClick} />;
}

export default class Board extends React.Component {
  renderHex(i) {
    return (
      <Hex value={this.props.hexes[i]} onClick={() => this.props.onClick(i)} />
    );
  }

  getRow(i) {
    let row = [];
    for (let j = 0; j < 11; j++) {
      row.push(this.renderHex(11 * i + j));
    }
    return row;
  }

  getHexes() {
    let board = [];
    for (let i = 0; i < 11; i++) {
      const row = this.getRow(i);
      board.push(<div className="board-row">{row}</div>);
    }
    return board;
  }

  render() {
    return <div>{this.getHexes()}</div>;
  }
}
