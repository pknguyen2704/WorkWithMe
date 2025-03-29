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
            display:'flex-direction',
            flexDirection: 'colume',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 'fit-content',
            maxHeight: 'fit-content',
            bgcolor: 'blue'
        }}>
        <Box sx={{
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '2px solid white',
        }}>
            <Typography sx={{
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
            }}>Tasks</Typography>
            <Box>
                <Tooltip title="More option">
                    <ExpandMore
                        sx={{
                            color: 'text.primary',
                            cursor: 'pointer',
                            bgcolor: 'rgba(1, 1, 1, 0.1)',
                            borderRadius: '10px'
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
                            <ListItemText>Add new card</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon><ContentCutIcon fontSize='small'/></ListItemIcon>
                            <ListItemText>Cut</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon><ContentCopyIcon fontSize='small'/></ListItemIcon>
                            <ListItemText>Copy</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon><ContentPasteIcon fontSize='small'/></ListItemIcon>
                            <ListItemText>Paste</ListItemText>
                        </MenuItem>
                        <Divider/>
                        <MenuItem>
                            <ListItemIcon><DeleteIcon fontSize='small'/></ListItemIcon>
                            <ListItemText>Remove this column</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon><ArchiveIcon fontSize='small'/></ListItemIcon>
                            <ListItemText>Save this column</ListItemText>
                        </MenuItem>

                    </Menu>
            </Box>
        </Box>
        <Box>
            <TaskList>

            </TaskList>
            <Box sx={{
                height: (theme) => theme.workWithMe.taskFooterHeight,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px dashed white',
                borderRadius: '10px',
                color: 'white'
            }}>
                <Button startIcon={<AddCardIcon/> }>Add Task</Button>
                <Tooltip title='Drag to move'>
                    <DragHandleIcon sx={{cursor:'pointer'}}/>
                </Tooltip>
            </Box>
        </Box>
        <Box >
            Footer
        </Box>
        </Box>

    );
}

export default PomodoroTodolist;
