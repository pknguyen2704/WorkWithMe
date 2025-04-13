import Box from '@mui/material/Box'
import React from 'react';
import PomodoroMain from './PomodoroMain/PomodoroMain';

const PomodoroContent = () => {
    return (
        <Box sx={{
            backgroundImage: "url('src/assets/bg1.jpg')",
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
            <Box sx={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                width: '20%',
                height: '152px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 3,
            }}>
                <iframe style={{border: 'none', padding: '0', height: '152px'}} src="https://open.spotify.com/embed/album/0Nk3XtxznsiaF8XzORxJx3?utm_source=generator&theme=0" width="100%" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </Box>

            <PomodoroMain></PomodoroMain>
        </Box>
    );
}

export default PomodoroContent;
