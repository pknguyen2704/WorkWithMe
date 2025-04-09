import React from 'react';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import VideocamIcon from '@mui/icons-material/Videocam';
import MicIcon from '@mui/icons-material/Mic';
import Pagination from '@mui/material/Pagination';
import FilterListIcon from '@mui/icons-material/FilterList';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import Chip from '@mui/material/Chip'


const ROOM_BAR_STYLE = {
    color: 'rgb(118, 181, 255)',
    bgcolor: 'white',
    border: 'black',
    // paddingX: '5px',
    opacity: '0.8',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': { 
        color: 'rgb(118, 181, 255)',
    },
    '&:hover': {
        color: 'rgb(118, 181, 255)',
        bgcolor: 'white',
        opacity: '1',
    }
}

const RoomBar = () => {
    return (
        <Box sx={{
            display: 'flex',
            height: (theme) => theme.workWithMe.workspaceBarHeight,
            width: 'inherit',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: '0 12px',
        }}>   
            <Box sx={{
                bgcolor: 'rgb(55, 145, 250)',
                display: 'flex',
                alignItems:'center',
                justifyContent: 'space-between',
                gap: 3,
                p: '8px',
                borderRadius: '10px'
            }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }}/>
                <VideocamIcon/>
                <MicIcon/>
            </Box>
            <Box>
                <Pagination count={10} showFirstButton showLastButton />
            </Box>
            <Box sx={{
                display:'flex',
                gap: 3,
                alignItems:'center',
                
            }}>
            <Chip 
                sx={ROOM_BAR_STYLE}
                icon={<FilterListIcon/>} 
                label='Filter'
                clickable

            />
            <Chip 
                sx={ROOM_BAR_STYLE}
                icon={<ChatIcon/>} 
                label='Chat'
                clickable

            />
            <Chip 
                sx={ROOM_BAR_STYLE}
                icon={<GroupsIcon/>} 
                label='112'
                clickable

            />
            </Box>
        </Box>
    );
}

export default RoomBar;
