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
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                height: 'fit-content',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
                gap: 4
            }}>
            <img src=''></img>
            <PomodoroClock></PomodoroClock>
            <PomodoroTodolist></PomodoroTodolist>
        </Box>
    );
}

export default PomodoroMain;
