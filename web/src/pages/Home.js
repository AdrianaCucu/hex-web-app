import React from 'react';
import { Box, Button } from 'grommet';
import { Link } from 'react-router-dom';
import { Gamepad } from 'grommet-icons';

export default class Home extends React.Component {
    render() {
        const icon = <Gamepad />;

        return (
            <Box
                direction='column'
                pad='small'
                align='center'
            >
                <Link to='/game'>
                    <Button
                        icon={icon}
                        label='Start Game'
                        margin='xlarge'
                        reverse
                    />
                </Link>
                <Link to='/help'>
                    <Button
                        label='Help'
                        margin='xsmall'
                    />
                </Link>
            </Box>
        );
    };
}
