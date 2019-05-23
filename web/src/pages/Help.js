import React from 'react';
import { Box, Button } from 'grommet';
import { Link } from 'react-router-dom';
import { Gamepad } from 'grommet-icons';

export default class Help extends React.Component {
    render() {
        return (
            <React.Fragment>
                Helloooooo :)
                <Link to='/'>
                    <Button
                        label='Back'
                        margin='xlarge'
                    />
                </Link>
            </React.Fragment>
        )
    };
}