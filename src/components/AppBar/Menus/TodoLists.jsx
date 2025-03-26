import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

const TodoLists = () => {
    return (
        <div>
            <Box sx={{display:'flex', alignItems: 'center', gap: 0.5}}>
                <Typography variant='span' sx={{color: 'primary.main'}}>To-do Lists</Typography>
            </Box>
        </div>
    );
}

export default TodoLists;
