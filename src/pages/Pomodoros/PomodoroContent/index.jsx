import Box from '@mui/material/Box'
import React from 'react';

import PomodoroMain from './PomodoroMain';
const PomodoroContent = () => {
    return (
        <Box sx={{
            backgroundImage: "url('https://studywithme.io/aesthetic-pomodoro-timer/3ce5f595f1a64dc1c1ee.jpg')",
            backgroundSize: "cover", // Giúp ảnh không bị thừa
            backgroundPosition: "center", // Giúp căn giữa ảnh
            backgroundRepeat: "no-repeat", // Không cho ảnh bị lặp lại
            backgroundColor: (theme) => (theme.palette.mode==='dark' ? '#2c3e50' : '#34495e'),
            width: '100%',
            height: (theme) => `calc(100vh - ${theme.workWithMe.appBarHeight})`,
            display: 'flex',
            position: 'relative',
            alignItems: 'center'
        }}>
            <PomodoroMain></PomodoroMain>
        </Box>
    );
}

export default PomodoroContent;
