import React from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
const TodoLists = () => {
    const navigate = useNavigate()
    // const [anchorEl, setAnchorEl] = React.useState(null)
    // const open = Boolean(anchorEl)
    const handleClick = () => {
        navigate('/todolist')
    }
    return (
        <Box sx={{display:'flex', alignItems: 'center', gap: 0.5}}>
            <Button
                sx={{
                    color: 'white'
                }}
                id="todolist-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
            Todo List
            </Button>
        </Box>
    );
}

export default TodoLists;
