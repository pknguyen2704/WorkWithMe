import React from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
const Pomodoro = () => {
    const navigate = useNavigate()
    // const [anchorEl, setAnchorEl] = React.useState(null)
    // const open = Boolean(anchorEl)
    const handleClick = () => {
        navigate('/pomodoro')
    }
    return (
        <Box sx={{display:'flex', alignItems: 'center', gap: 0.5}}>
            <Button
                sx={{
                    color: 'white'
                }}
                id="Pomodoro-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                
            >
            Pomodoro Timer
            </Button>
        </Box>
    );
}

export default Pomodoro;
