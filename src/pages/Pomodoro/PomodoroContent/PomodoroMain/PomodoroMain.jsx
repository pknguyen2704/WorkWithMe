import React from 'react';
import Box from '@mui/material/Box'
import { Button, Typography } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import SettingsIcon from '@mui/icons-material/Settings';

import PomodoroClock from './Clock/Clock';
import PomodoroTodolist from './TodoList/TodoList'

const PomodoroMain = () => {
    return (
        <Box sx={{
                width: '70%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'rgba(0, 0, 0, 1)',
                height: 'fit-content',
                // alignItems: 'center',
                // position: 'absolute',
                // top: "50%",
                // left: "50%",
                // transform: "translate(-50%, -50%)",
                justifyContent: 'center',
                borderRadius: '10px',
                gap: 4
            }}>
            <Typography variant='h1' sx={{
                textAlign:'center',
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'white',
                textTransform: 'uppercase',
            }}>Work With Me</Typography>
            <PomodoroClock></PomodoroClock>
            <PomodoroTodolist></PomodoroTodolist>
        </Box>
    );
}

export default PomodoroMain;
