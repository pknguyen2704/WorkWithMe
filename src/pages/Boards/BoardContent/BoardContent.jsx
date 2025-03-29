import React from 'react'
import Box from '@mui/material/Box'
import ListColumn from './ListColumn/ListColumn';


const BoardContent = () => {

    return (
        <Box sx={{
            backgroundColor: (theme) => (theme.palette.mode==='dark' ? '#2c3e50' : '#34495e'), 
            width: '100%',
            height: (theme) => theme.workWithMe.boardContentHeight,
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden'

        }}>
            <ListColumn></ListColumn>

        </Box>
    );
}

export default BoardContent;
