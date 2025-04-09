import { Box, Card } from '@mui/material';
import React from 'react';
import RoomBar from '../RoomBar/RoomBar';

import ListCam from '../ListCam/ListCam';
const PublicRoom = () => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: (theme) => theme.workWithMe.workspaceContentHeight,
            bgcolor: 'rgb(248, 250, 255)',
            width: 'inherit'
        }}>
            <RoomBar> </RoomBar>
            <ListCam></ListCam>

        </Box>
    );
}

export default PublicRoom;
