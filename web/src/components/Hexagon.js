import styled from 'styled-components';

const getSizeAttribute = (props, multiplier) =>
  props.size ? props.size * multiplier + 'px' : '99px';

const Hex = styled.button`
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

export default Hex;