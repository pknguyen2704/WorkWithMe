import { Divider, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material';
import React from 'react'
import Box from '@mui/material/Box'
import { useState } from 'react';
import { Button } from '@mui/material';
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

import ListCard from './ListCard/ListCard';
import { mapOrder } from '~/utils/sorts';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import { TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import { useConfirm } from "material-ui-confirm";
const Column = ({column, createNewCard, deleteColumnDetails}) => {
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

    const [openNewCardForm, setOpenNewCardForm] = useState(false)
    const toggleOpenNewCardForm = () => setOpenNewCardForm(!openNewCardForm)

    const [newCardTitle, setNewCardTitle] = useState('')
    const addNewCard = async() => {
        if (!newCardTitle) {
            toast.error('please enter card title')
            return
        }
        const newCardData = {
            title: newCardTitle,
            columnId: column._id
        }
        await createNewCard(newCardData)

        toggleOpenNewCardForm()
        setNewCardTitle('')
    }
    const confirmDeleteColumn = useConfirm()
    const handleDeleteColumn = () => {
        confirmDeleteColumn({
            title: `Delete column ${column.title}`,
            // content: "This action will permanently delete this column and cards. Are you sure?",
            confirmationText: 'Confirm',
            cancellationText: 'Cancel',
            // allowClose: false,
            // dialogProps: {
            //     maxWidth: 'xs',
            // },
            // confirmationButtonProps: {
            //     color: 'secondary', 
            //     variant: 'outlined'
            // },
            // cancellationButtonProps: {
            //     color: 'inherit'

            // },
            description: `Type ${column.title} to delete confirmation`,

            confirmationKeyword: `${column.title}`,
        }).then(() => {
            deleteColumnDetails(column._id)
        }).catch(() => {})
    }
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
                maxHeight: (theme) => `calc(${theme.workWithMe.boardContentHeight} - ${theme.spacing(5)})`

            }}>

            <Box 
                
                sx={{
                height: (theme) => theme.workWithMe.columnHeaderHeight,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
                }}>
                <Typography  variant="6" sx={{
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
                        onClick={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-column-dropdown',
                        }}
                    >
                        <MenuItem onClick={toggleOpenNewCardForm} sx={{
                            '&:hover': {
                                color: 'success.dark',
                                '& .add-card-icon': {
                                    color: 'success.dark'
                                } 
                            }
                            }}>
                            <ListItemIcon><AddCardIcon className="add-card-icon" fontSize='small'/></ListItemIcon>
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
                        <MenuItem 
                            onClick={handleDeleteColumn}
                            sx={{
                            '&:hover': {
                                color: 'warning.dark',
                                '& .delete-icon': {
                                    color: 'warning.dark'
                                } 
                            }
                            
                        }}>
                            <ListItemIcon><DeleteIcon className="delete-icon" fontSize='small'/></ListItemIcon>
                            <ListItemText>Delete this column</ListItemText>
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
                p: 2
            }}>
            {
                !openNewCardForm
                ? <Box sx={{
                    display: 'flex',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                     <Button onClick={toggleOpenNewCardForm} startIcon={<AddCardIcon/>}>Add new card</Button>
                        <Tooltip title='Drag to move'>
                            <DragHandleIcon sx={{cursor:'pointer'}}/>
                    </Tooltip>
                </Box>
                : <Box sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                }}>
                <TextField 
                        label="Enter column title...." 
                        type="text"  
                        size='small'
                        variant='outlined'
                        autoFocus
                        value={newCardTitle}
                        onChange={(e) => setNewCardTitle(e.target.value)}
                        sx={{
                            '& label': {color: 'white'},
                            '& input': {color: 'white'},
                            '& label.Mui-focused': {color: 'white'},
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white'
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white'
                                },
                                '&.Mui-focused fieldset': {borderColor: 'white'},
                            }
                        }}
                    />   
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <Button onClick={addNewCard}
                            variant='contained'
                            color='success'
                            size='small'
                            sx={{
                                boxShadow: 'none',
                                border: '0.5 px solid',
                                borderColor: (theme) => theme.palette.success.main,
                                '&:hover': {
                                    bgcolor: (theme) => theme.palette.success.main
                                }
                            }}
                        >Add card</Button>
                        <CloseIcon
                            fontSize='small'
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: (theme) => theme.palette.warning.light
                                }
                            }}
                            onClick={toggleOpenNewCardForm}
                        />
                    </Box>  
                </Box>
            }



            </Box>

        </Box>
        </div>
    );
}

export default Column;
