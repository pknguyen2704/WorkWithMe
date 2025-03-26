import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { ExpandMore } from '@mui/icons-material'

const Workspace = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <Box>
            <Button
                sx={{
                    color: 'white'
                }}
                id="Workspace-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<ExpandMore />}
            >
                Workspace
            </Button>
            <Menu
                id="Workspace-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Join Workspace</MenuItem>
                <MenuItem onClick={handleClose}>Create Workspace</MenuItem>
            </Menu>
        </Box>
    );
}

export default Workspace;
