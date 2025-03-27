import React from 'react';
import Box from '@mui/material/Box'
import { Button, Typography } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import SettingsIcon from '@mui/icons-material/Settings';

const PomodoroClock = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4
        }}>
            <Box sx={{
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3
            }}>
                <Button variant="outlined"
                    sx={{
                        borderRadius: '50px',
                        color: 'white',
                        borderColor: 'white',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        '&:hover': {
                            bgcolor: 'white',
                            color: 'black',
                            borderColor: 'white',
                        }
                    }}>pomodoro</Button>
                <Button variant="outlined" 
                    sx={{
                        borderRadius: '50px',
                        color: 'white',
                        borderColor: 'white',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        '&:hover': {
                            bgcolor: 'white',
                            color: 'black',
                            borderColor: 'white',
                        }
                    }}>short break</Button>
                <Button variant="outlined" sx={{
                        borderRadius: '50px',
                        color: 'white',
                        borderColor: 'white',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        '&:hover': {
                            bgcolor: 'white',
                            color: 'black',
                            borderColor: 'white',
                        }
                    }}>long break</Button>
            </Box>
            <Box sx={{
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography variant='h1' sx={{
                    fontSize: '10rem',
                    fontWeight: '400',
                    color: 'white'
                }}>25:00</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3, 
            }}>
                <Button variant="outlined" 
                sx={{
                    borderRadius: '50px',
                    borderColor: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    bgcolor: 'white',
                    color: 'black',
                    paddingX: 5,
                    '&:hover': {
                        color: 'white',
                        borderColor: 'white'
                    }
                }}>
                start</Button>
                <RestartAltIcon sx={{color:'white', cursor: 'pointer'}} />
                <SettingsIcon sx={{color:'white', cursor: 'pointer'}}/>
            </Box>
        </Box>
    );
}

export default PomodoroClock;
