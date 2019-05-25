import React from 'react';
import { Box, Button } from 'grommet';
import styled from 'styled-components';

import { hexagons } from '../helpers/themes';

const getSizeAttribute = (props, multiplier) =>
  props.size ? props.size * multiplier + 'px' : '99px';

const Hex = styled.div`
  position: relative;
  width: ${props => getSizeAttribute(props, 1)};
  height: ${props => getSizeAttribute(props, 0.5775)};
  background-color: ${props => props.color};
  margin: ${props => getSizeAttribute(props, 0.28875)} 0;
  border-left: solid 1px
    ${props => (props.borderColor ? props.borderColor : '#FFFFFF')};
  border-right: solid 1px
    ${props => (props.borderColor ? props.borderColor : '#FFFFFF')};

  &:before,
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    width: ${props => getSizeAttribute(props, 0.7071875)};
    height: ${props => getSizeAttribute(props, 0.7071875)};
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: ${props => getSizeAttribute(props, 0.1151968751875)};
  }

  &:before {
    top: ${props => getSizeAttribute(props, -0.353553125)};
    border-top: solid 1.4142px
      ${props => (props.borderColor ? props.borderColor : '#FFFFFF')};
    border-right: solid 1.4142px
      ${props => (props.borderColor ? props.borderColor : '#FFFFFF')};
  }

  &:after {
    bottom: ${props => getSizeAttribute(props, -0.353553125)};
    border-bottom: solid 1.4142px
      ${props => (props.borderColor ? props.borderColor : '#FFFFFF')};
    border-left: solid 1.4142px
      ${props => (props.borderColor ? props.borderColor : '#FFFFFF')};
  }
`;

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
        size: 96,
        color: randomColor,
      };
      row.push(
        <Hex
          color={hex.color}
          size={hex.size}
          row={hex.row}
          column={hex.column}
          label={hex.label}
          onClick={() => this.props.onClick(i, j)}
        />
      );
    }
    board.push(<Box direction="row">{row}</Box>);
  }

  return (
    <Box fill align="center" justify="center" size="small">
      {board}
    </Box>
  );
}

export default class Board extends React.Component {
  render() {
    return <Tiles size={2} onClick={() => console.log('Clicked meh :)')} />;
  }
}
