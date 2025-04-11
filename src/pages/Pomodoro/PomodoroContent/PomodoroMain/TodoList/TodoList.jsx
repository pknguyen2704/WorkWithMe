import React from 'react';
import { Divider, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box'
import AddCardIcon from '@mui/icons-material/AddCard';
import Button from '@mui/material/Button'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { ExpandMore } from '@mui/icons-material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import TaskList from './TaskList/TaskList';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const PomodoroTodolist = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{
            // display:'flex-direction',
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'fit-content',
            width: '100%',
            // bgcolor: 'blue',
            gap: 2

        }}>
            <Box sx={{
                color: 'white',
                width: 'inherit',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid white',
                // p: '12px 0',

            }}>
                <Typography sx={{
                    fontSize: '1rem !important',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    // p: '0 0 0 12px'
                }}>Tasks</Typography>
                <Box>
                    <Tooltip title="More option">
                        <ExpandMore
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                                bgcolor: 'rgba(1, 1, 1, 0.3)',
                                borderRadius: '5px',
                                '&:hover': {
                                    bgcolor: 'rgba(1, 1, 1, 0.5)'
                                }
                            }}
                            id="basic-column-dropdown"
                            aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        />
                    </Tooltip>
                        <Menu
                            id="basic-menu-column-dropdown"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-column-dropdown',
                            }}
                        >
                            <MenuItem>
                                <ListItemIcon><AddCardIcon fontSize='small'/></ListItemIcon>
                                <ListItemText>Add new task</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon><DeleteIcon fontSize='small'/></ListItemIcon>
                                <ListItemText>Delete this task</ListItemText>
                            </MenuItem>
                            <Divider/>
                            <MenuItem>
                                <ListItemIcon><DeleteIcon fontSize='small'/></ListItemIcon>
                                <ListItemText>Clear all tasks</ListItemText>
                            </MenuItem>
                        </Menu>
                </Box>
            </Box>
        <Box sx={{
            width: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            gap: 2
        }}>
            <TaskList/>
            <Box sx={{
                height: (theme) => theme.workWithMe.taskFooterHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed white',
                borderRadius: '10px',
                color: 'white',
                opacity: '0.5',
                '&:hover': {
                    opacity: '1'
                },
            }}>
                <Button startIcon={<AddCircleIcon/>} sx={{
                    color: 'white'
                }}>Add Task</Button>
            </Box>
        </Box>
        </Box>

    );
}

export default PomodoroTodolist;
