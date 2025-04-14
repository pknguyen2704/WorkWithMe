import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate()
    // const [anchorEl, setAnchorEl] = React.useState(null)
    // const open = Boolean(anchorEl)
    const handleClick = () => {
        navigate('/home')
    }
    return (
        <Box sx={{display:'flex', alignItems: 'center', gap: 0.5}}>
            <Button
                sx={{
                    color: 'white'
                }}
                id="Home-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
            Home
            </Button>
        </Box>
    );
}

export default Home;
