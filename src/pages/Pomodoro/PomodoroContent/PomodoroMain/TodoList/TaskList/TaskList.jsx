import React from 'react';
import Box from '@mui/material/Box'
import Task from './Task/Task';

const TaskList = () => {
    return (
        <Box sx={{
            display:'flex',
            flexDirection: 'column',
            overflowX: 'hidden', 
            overflowY: 'auto',
            maxHeight: (theme) => `calc(${theme.workWithMe.boardContentHeight} - ${theme.spacing(5)} - ${(theme) => theme.workWithMe.columnHeaderHeight} - ${(theme) => theme.workWithMe.columnFooterHeight})`,
            gap: 1
        }}>
        <Task/>
        <Task/>

        </Box>
    );
}

export default TaskList;
