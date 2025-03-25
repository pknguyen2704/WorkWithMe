import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
const Home = () => {
    return (
        <Box sx={{display:'flex', alignItems: 'center', gap: 0.5}}>
            <Typography variant='span' sx={{color: 'primary.main'}}>Home</Typography>
        </Box>
    );
}

export default Home;
