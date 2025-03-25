import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
const Pomodoro = () => {
    return (
        <Box sx={{display:'flex', alignItems: 'center', gap: 0.5}}>
            <Typography variant='span' sx={{color: 'primary.main'}}>Pomodoro</Typography>
        </Box>
    );
}

export default Pomodoro;
