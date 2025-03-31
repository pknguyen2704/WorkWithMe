import React, { useEffect, useState } from 'react'
import {cloneDeep} from 'lodash'
import Box from '@mui/material/Box'
import ListColumn from './ListColumn/ListColumn';
import { mapOrder } from '~/utils/sorts';
import {DndContext, DragOverlay, defaultDropAnimationSideEffects, closestCorners} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import Column from './ListColumn/Column/Column';
import Card from './ListColumn/Column/ListCard/Card/Card';
const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
    CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

const BoardContent = ({board}) => {
    const [orderedColumns, setOrderedColumns] = useState([])
    const [activeDragItemId, setActiveDragItemId] = useState(null)
    const [activeDragItemType, setActiveDragItemType] = useState(null)
    const [activeDragItemData, setActiveDragItemData] = useState(null)
    const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] = useState([])




    useEffect(() => {
        setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
    }, [board])

    const findColumnByCardId = (cardId) => {
        return orderedColumns.find(column => column.cards.map(card => card._id)?.includes(cardId))
    }
    const handleDragStart = (event) => {
        setActiveDragItemId(event?.active?.id)
        setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
        setActiveDragItemData(event?.active?.data?.current)

        if(event?.active?.data?.current?.columnId) {
            setOldColumnWhenDraggingCard(findColumnByCardId(event?.active?.id))
        }
    }
    const handleDragOver = (event) => {
        if(activeDragItemType===ACTIVE_DRAG_ITEM_TYPE.COLUMN) return
        const {active, over} = event
        if(!active || !over) return
        const {id: activeDraggingCardId,  data: {current: activeDraggingCardData}} = active
        const {id: overCardId} = over

        const activeColumn = findColumnByCardId(activeDraggingCardId)
        const overColumn = findColumnByCardId(overCardId)

        if(!activeColumn || !overColumn) return
        if(oldColumnWhenDraggingCard._id !== overColumn._id) {
        
            setOrderedColumns(prevColumn => {
                const overCardIndex = overColumn.cards?.findIndex(card => card._id == overCardId)
                let newCardIndex
                const isBelowOverItem = active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height;

                const modifier = isBelowOverItem ? 1 : 0;

                newCardIndex = newCardIndex >= 0 ? newCardIndex + modifier : overColumn.cards.length + 1;
                const nextColumns = cloneDeep(prevColumn)
                const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
                const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)
                
                if(nextActiveColumn) {
                    nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)

                    nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
                }
                if(nextOverColumn) {
                    nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)
                    
                    nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData)
                    nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)
//
                }
                return nextColumns
            })
        }
    }
    const handleDragEnd = (event) => {
        const {active, over} = event
        if(!active || !over) return

        if(activeDragItemType == ACTIVE_DRAG_ITEM_TYPE.CARD) {
            const {id: activeDraggingCardId,  data: {current: activeDraggingCardData}} = active
            const {id: overCardId} = over
    
            const activeColumn = findColumnByCardId(activeDraggingCardId)
            const overColumn = findColumnByCardId(overCardId)
    
            if(!activeColumn || !overColumn) return
            if(activeColumn._id !== overColumn._id) {
                setOrderedColumns(prevColumn => {
                    const overCardIndex = overColumn.cards?.findIndex(card => card._id == overCardId)
                    let newCardIndex
                    const isBelowOverItem = active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height;
    
                    const modifier = isBelowOverItem ? 1 : 0;
    
                    newCardIndex = newCardIndex >= 0 ? newCardIndex + modifier : overColumn.cards.length + 1;
                    const nextColumns = cloneDeep(prevColumn)
                    const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
                    const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)
                    
                    if(nextActiveColumn) {
                        nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)
    
                        nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
                    }
                    if(nextOverColumn) {
                        nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)
                        
                        nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData)
                        nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)
    //
                    }
                    return nextColumns
                })
            } else {
                
            }

        }
        if(activeDragItemType == ACTIVE_DRAG_ITEM_TYPE.COLUMN && active.id !== over.id) {
            const oldIndex = orderedColumns.findIndex(c => c._id == active.id)
            const newIndex = orderedColumns.findIndex(c => c._id == over.id)
            const dndOrderdColumns = arrayMove(orderedColumns, oldIndex, newIndex)
            // const dndOrderdColumnsIds = dndOrderdColumns.map(c => c._id)
            setOrderedColumns(dndOrderdColumns)

        }
        setActiveDragItemId(null)
        setActiveDragItemType(null)
        setActiveDragItemData(null)
        setOldColumnWhenDraggingCard(null)
    }
    const dropAnimation = {
        sideEffects: defaultDropAnimationSideEffects({
          styles: {
            active: {
              opacity: '0.5',
            },
          },
        }),
      };
    return (
        <DndContext collisionDetection={closestCorners} DragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>

            <Box sx={{
                backgroundColor: (theme) => (theme.palette.mode==='dark' ? '#2c3e50' : '#34495e'), 
                width: '100%',
                height: (theme) => theme.workWithMe.boardContentHeight,
                display: 'flex',
                p: '10px 0'

            }}>
                <ListColumn columns={orderedColumns}></ListColumn>
                <DragOverlay dropAnimation={dropAnimation}>
                    {(!activeDragItemType) && null}
                    {(activeDragItemType == ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData}/>}
                    {(activeDragItemType == ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData}/>}

                </DragOverlay>

            </Box>
        </DndContext>
    );
}

export default BoardContent;
