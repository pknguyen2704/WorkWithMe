import { Divider, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material';
import React from 'react'
import Box from '@mui/material/Box'
import { useState } from 'react';
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { ExpandMore } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCardIcon from '@mui/icons-material/AddCard';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';
import ListCard from './ListCard/ListCard';
import { mapOrder } from '~/utils/sorts';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

const Column = ({column}) => {
    const {
        attributes,listeners,setNodeRef, transform, transition, isDragging} = useSortable({id: column._id, data: {...column}

    });
    
    const dndKitColumnStyles = {
        transform: CSS.Translate.toString(transform),
        transition,
        height: '100%',
        opacity: isDragging ? 0.5 : undefined
    };
    
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const orderdCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')
    
    return (
        <div ref = {setNodeRef}
            style={dndKitColumnStyles}
            {...attributes} 
            >
        
        <Box
            {...listeners}
        sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) => (theme.palette.mode==='dark' ? '#2c3e50' : '#ebecf0'),
            ml: 2,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: (theme) => `calc(${theme.workWithMe.boardContentHeight} - ${theme.spacing(2)})`

        }}>
            <Box sx={{
                height: (theme) => theme.workWithMe.columnHeaderHeight,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography variant="6" sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                }}>
                {column?.title}</Typography>
                <Box>
                <Tooltip title="More option">
                    <ExpandMore
                        sx={{
                            color: 'text.primary',
                            cursor: 'pointer'
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
            <ListCard cards={orderdCards}/>

            <Box sx={{
                height: (theme) => theme.workWithMe.columnFooterHeight,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Button startIcon={<AddCardIcon/>}>Add new card</Button>
                <Tooltip title='Drag to move'>
                    <DragHandleIcon sx={{cursor:'pointer'}}/>
                </Tooltip>
            </Box>

        </Box>
        </div>
    );
}

export default Column;
