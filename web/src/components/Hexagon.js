import React from 'react';
import styled from 'styled-components';

import { hexagons } from '../helpers/themes';

const colors = {
  red: hexagons.playerOne,
  blue: hexagons.playerTwo,
  empty: hexagons.empty,
};

const getSizeAttribute = (props, multiplier) =>
  props.size ? props.size * multiplier + 'px' : '99px';

const getBorderColor = props => (props.color ? colors[props.color] : '#000000');
const getFillColor = props => (props.color ? colors[props.color] : '#000000');

const Hex = styled.button`
  position: relative;
  width: ${props => getSizeAttribute(props, 1)};
  height: ${props => getSizeAttribute(props, 0.5775)};
  background-color: ${props => getFillColor(props)};
  margin: ${props => getSizeAttribute(props, 0.28875)} 0;
  border-left: solid 1px ${props => getBorderColor(props)};
  border-right: solid 1px ${props => getBorderColor(props)};

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
    border-top: solid 1.4142px ${props => getBorderColor(props)};
    border-right: solid 1.4142px ${props => getBorderColor(props)};
  }

  &:after {
    bottom: ${props => getSizeAttribute(props, -0.353553125)};
    border-bottom: solid 1.4142px ${props => getBorderColor(props)};
    border-left: solid 1.4142px ${props => getBorderColor(props)};
  }
`;

function PaddedHex(props) {
  const color =
    props.color === 'R' ? 'red' : props.color === 'B' ? 'blue' : 'empty';

  return (
    <span style={{ margin: '0.05em' }}>
      <Hex size={props.size} color={color} onClick={props.onClick} />
    </span>
  );
}

export default PaddedHex;
