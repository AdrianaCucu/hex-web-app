import React from 'react';
import { Button, Heading } from 'grommet';
import { Link } from 'react-router-dom';

export default class Game extends React.Component {
    render() {
        return (
            <React.Fragment>

                <Heading
                    alignSelf='left'
                    margin='medium'
                >
                    Hex
                </Heading>

                <Link to='/game'>
                    <Button
                        label='New Game'
                        margin='small'
                    />
                </Link>

                <Link to='/'>
                    <Button
                        label='Back'
                        margin='small'
                    />
                </Link>

            </React.Fragment>
        );
    };
}
