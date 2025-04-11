import { Box, Card } from '@mui/material';
import React from 'react';
import RoomBar from '../RoomBar/RoomBar';

import ListCam from '../ListCam/ListCam';
const PublicRoom = () => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: (theme) => theme.workWithMe.roomHeight,
            bgcolor: '#95a5a6',
            width: 'inherit',
            alignItems:'center',
            justifyContent: 'center'
        }}>
            <ListCam></ListCam>

        </Box>
    );
}

export default PublicRoom;
