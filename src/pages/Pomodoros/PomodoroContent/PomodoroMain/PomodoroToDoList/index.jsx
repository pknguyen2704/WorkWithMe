import React from 'react';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
const PomodoroTodolist = () => {
    return (
        <Box sx={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TextField 
                id="filled-multiline-static"
                label="To-do List"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="filled"
                sx={{
                    width: '20%'
                }}
            />
        </Box>

    );
}

export default PomodoroTodolist;
