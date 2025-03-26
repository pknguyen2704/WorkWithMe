import React from 'react';
import Box from '@mui/material/Box'
import { Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import SettingsIcon from '@mui/icons-material/Settings';

import PomodoroClock from './PomodoroClock';
import PomodoroTodolist from './PomodoroToDoList'
const PomodoroMain = () => {
    return (
        <Box sx={{
                width: '100%',
                display: 'block',
                alignItems: 'center',
                position: 'absolute',
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                // justifyContent: 'center',
                gap: 2,
                borderRadius: '10px'
            }}>
            <h1>Work with me!!</h1>
            <PomodoroClock></PomodoroClock>
            <PomodoroTodolist></PomodoroTodolist>
        </Box>
    );
}

export default PomodoroMain;
