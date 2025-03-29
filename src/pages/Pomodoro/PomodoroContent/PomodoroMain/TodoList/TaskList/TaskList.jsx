import React from 'react';
import Box from '@mui/material/Box'
import Task from './Task/Task';

const TaskList = () => {
    return (
        <Box sx={{
            p: '0 5px',
            m: '0 5px',
            display:'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden', 
            overflowY: 'auto',
            maxHeight: (theme) => `calc(${theme.workWithMe.boardContentHeight} - ${theme.spacing(5)} - ${(theme) => theme.workWithMe.columnHeaderHeight} - ${(theme) => theme.workWithMe.columnFooterHeight})`
        }}>
        <Task/>
        </Box>
    );
}

export default TaskList;
