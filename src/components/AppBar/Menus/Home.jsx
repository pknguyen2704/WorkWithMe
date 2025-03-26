import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Home = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };
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
