import React from 'react';
import { Box, Button } from 'grommet';
import { Link } from 'react-router-dom';

export default class Help extends React.Component {
    render() {
        return (
            <Box
                direction='column'
                pad='small'
                align='center'
                margin='small'
            >
                Helloooooo :)
                <Link to='/'>
                    <Button
                        label='Back'
                        margin='small'
                    />
                </Link>
            </Box>
        )
    };
}