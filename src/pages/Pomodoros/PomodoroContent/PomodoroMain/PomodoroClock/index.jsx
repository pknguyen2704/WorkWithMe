import React from 'react';
import Box from '@mui/material/Box'
import { Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import SettingsIcon from '@mui/icons-material/Settings';
const PomodoroClock = () => {
    return (
        <Box>
            <Box sx={{
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2
            }}>
                <Button variant="outlined"
                    sx={{
                        borderRadius: '50px',
                        color: 'white',
                        '&:hover': {
                            bgcolor: 'white',
                            color: 'black'
                        }
                    }}>Pomodoro</Button>
                <Button variant="outlined" 
                    sx={{
                        borderRadius: '50px',
                        color: 'white',
                        '&:hover': {
                            bgcolor: 'white',
                            color: 'black'
                        }
                    }}>short break</Button>
                <Button variant="outlined" sx={{
                        borderRadius: '50px',
                        color: 'white',
                        '&:hover': {
                            bgcolor: 'white',
                            color: 'black'
                        }
                    }}>long break</Button>
            </Box>
            <Box sx={{
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1>25:00</h1>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2, 
            }}>
                <Button variant="outlined" 
                sx={{
                    borderRadius: '50px',
                    bgcolor: 'white',
                    color: 'black',
                    paddingX: 4,
                    '&:hover': {
                        color: 'white'
                    }
                }}>
                Start</Button>
                <RestartAltIcon sx={{color:'white', cursor: 'pointer'}}/>
                <SettingsIcon sx={{color:'white', cursor: 'pointer'}}/>
            </Box>
        </Box>
    );
}

export default PomodoroClock;
