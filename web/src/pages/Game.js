import React from 'react';
import { Box, Button, Heading } from 'grommet';
import { Link } from 'react-router-dom';

import { clone } from '../helpers/arrays';
import Board from '../components/Board';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          hexes: Array(121).fill(null),
        },
      ],

      stepNumber: 0,

      redIsNext: true,
    };
  }

  handleClick(i) {
    /**
     * History is not rendered yet !!!!!
     */

    const history = clone(this.state.history);
    const current = history[history.length - 1];
    const hexes = clone(current.hexes);

    const moveIsValid = hexes[i] === null;
    if (!moveIsValid) {
      console.warn('Move not valid :(');
      return;
    }

    hexes[i] = this.state.redIsNext ? 'R' : 'B';

    this.setState({
      // Why is this contact([object]) rather than push(object)?
      history: history.concat([
        {
          hexes: hexes,
        },
      ]),

      /**
       * Updates the step number both for normal moves and when going back to a previous state.
       */
      stepNumber: history.length,

      /**
       * At each turn, the player is changed ('R' or 'B').
       */
      redIsNext: !this.state.redIsNext,
    });
  }

  /**
   * Going back to previous game states.
   *
   * @param {*} step - the number of the previous game state
   */
  jumpTo(step) {
    if (step === 0)
      this.setState({
        history: [
          {
            hexes: Array(121).fill(null),
          },
        ],
      });

    this.setState({
      stepNumber: step,
      redIsNext: step % 2 === 0,
    });
  }

  render() {
    // const history = this.state.history;
    const { history } = this.state;
    const current = history[this.state.stepNumber];

    const gameStates = history.map((step, move) => {
      // Previous moves.
      const desc = move ? '#' + move : 'Restart';

      return <Button onClick={() => this.jumpTo(move)}>{desc}</Button>;
    });

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
          <Heading margin="small">Hex</Heading>

          <Link to="/game">
            <Button label="New Game" margin="small" />
          </Link>

          <Link to="/">
            <Button label="Back" margin="small" />
          </Link>
        </Box>

        <Box id="game" border width="xlarge" height="full">
          Game
          <Board hexes={current.hexes} onClick={i => this.handleClick(i)} />
        </Box>

        <Box border width="medium" height="full" align="center" size="small">
          Previous game states:
          {gameStates}
        </Box>
      </Box>
    );
  }
}
