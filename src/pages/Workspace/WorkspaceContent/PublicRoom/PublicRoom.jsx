import { Box } from '@mui/material';
import React from 'react';
import RoomBar from '../RoomBar/RoomBar';
const PublicRoom = () => {
    return (
        <Box sx={{
            display: 'flex',
            height: (theme) => theme.workWithMe.workspaceContentHeight,
            bgcolor: 'rgb(248, 250, 255)',
            width: 'inherit'
        }}>
            <RoomBar> </RoomBar>
        </Box>
    );
}

export default PublicRoom;
