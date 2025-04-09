import Box from '@mui/material/Box'
import React from 'react';
import PomodoroMain from './PomodoroMain/PomodoroMain';

const PomodoroContent = () => {
    return (
        <Box sx={{
            backgroundImage: "url('https://studywithme.io/aesthetic-pomodoro-timer/9f1e88521119e2e349d8.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", 
            bgColor: (theme) => (theme.palette.mode==='dark' ? '#2c3e50' : '#34495e'),
            width: '100%',
            height: (theme) => theme.workWithMe.pomodoroContentHeight,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <PomodoroMain></PomodoroMain>
        </Box>
    );
}

export default PomodoroContent;
