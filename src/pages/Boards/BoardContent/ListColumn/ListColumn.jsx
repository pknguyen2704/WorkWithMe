
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Column from './Column/Column';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {SortableContext, horizontalListSortingStrategy} from '@dnd-kit/sortable';
import { TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import { cloneDeep } from 'lodash'
import { createNewCardAPI } from '~/apis'
import { createNewColumnAPI } from '~/apis';
import { generatePlaceholderCard } from '~/utils/formatters';
import { updateCurrentActiveBoard, selectCurrentActiveBoard } from '~/redux/activeBoard/activeBoardSlice'
import { useSelector, useDispatch } from 'react-redux'

const ListColumn = ({columns}) => {
    const dispatch = useDispatch()

    const board = useSelector(selectCurrentActiveBoard)

    const [openNewColumnForm, setOpenNewColumnForm] = useState(false)
    const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)

    const [newColumnTitle, setNewColumnTitle] = useState('')
    const addNewColumn = async() => {
        if (!newColumnTitle) {
            toast.error('please enter column title')
            return 
        }
        const newColumnData = {
            title: newColumnTitle
        }
        const createdColumn = await createNewColumnAPI( {
            ...newColumnData,
            boardId: board._id
            }
        )

        createdColumn.cards = [generatePlaceholderCard(createdColumn)]
        createdColumn.cardOrderIds = [generatePlaceholderCard(createdColumn)._id]
        // const newBoard = {...board}
        const newBoard = cloneDeep(board)
        newBoard.columns.push(createdColumn)
        newBoard.columnOrderIds.push(createdColumn._id)
        dispatch(updateCurrentActiveBoard(newBoard))

        toggleOpenNewColumnForm()
        setNewColumnTitle('')
    }
    return (
        <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
        <Box sx={{
            bgcolor: 'inherit',
            width: '100%',
            height: '100%',
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden',
        }}>
            {columns?.map((column) => {
                return <Column 
                key={column._id} 
                column={column} 
                />
            })}
            
            {!openNewColumnForm
                ? <Box onClick={toggleOpenNewColumnForm} sx={{
                    minWidth: '250px',
                    maxWidth: '250px',
                    mx: 2,
                    borderRadius: '6px',
                    height: 'fit-content',
                    bgcolor: '#ffffff3d'
                }}>
                <Button startIcon={
                    <AddIcon/> 
                } sx={{
                    color: 'white',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>Add new column</Button>
                </Box>
                : <Box sx={{
                    minWidth: '250px',
                    maxWidth: '250px',
                    mx: 2,
                    p: 1,
                    borderRadius: '6px',
                    height: 'fit-content',
                    bgcolor: '#ffffff3d',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1
                }}> 
                    <TextField 
                        label="Enter column title...." 
                        type="text"  
                        size='small'
                        variant='outlined'
                        autoFocus
                        value={newColumnTitle}
                        onChange={(e) => setNewColumnTitle(e.target.value)}
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
                        <Button onClick={addNewColumn}
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
                        >Add column</Button>
                        <CloseIcon
                            fontSize='small'
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: (theme) => theme.palette.warning.light
                                }
                            }}
                            onClick={toggleOpenNewColumnForm}
                        />
                    </Box>             
                </Box>

            }

        </Box>
        </SortableContext>
    );
}

export default ListColumn;
