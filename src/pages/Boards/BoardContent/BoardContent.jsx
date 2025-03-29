import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import ListColumn from './ListColumn/ListColumn';
import { mapOrder } from '~/utils/sorts';
import {DndContext} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';



const BoardContent = ({board}) => {
    const [orderdColumns, setOrderColumns] = useState([])
    useEffect(() => {
        setOrderColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
    }, [board])
    const handleDragEnd = (event) => {
        const {active, over} = event
        if(!over) return
        if(active.id !== over.id) {
            const oldIndex = orderdColumns.findIndex(c => c._id == active.id)
            const newIndex = orderdColumns.findIndex(c => c._id == over.id)
            const dndOrderdColumns = arrayMove(orderdColumns, oldIndex, newIndex)
            // const dndOrderdColumnsIds = dndOrderdColumns.map(c => c._id)
            setOrderColumns(dndOrderdColumns)
        }

    }
    return (
        <DndContext onDragEnd={handleDragEnd}>

            <Box sx={{
                backgroundColor: (theme) => (theme.palette.mode==='dark' ? '#2c3e50' : '#34495e'), 
                width: '100%',
                height: (theme) => theme.workWithMe.boardContentHeight,
                display: 'flex',
                p: '10px 0'

            }}>
                <ListColumn columns={orderdColumns}></ListColumn>

            </Box>
        </DndContext>
    );
}

export default BoardContent;
