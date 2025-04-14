import React, { useCallback, useEffect, useRef, useState } from 'react'
import {cloneDeep, isEmpty} from 'lodash'
import Box from '@mui/material/Box'
import ListColumn from './ListColumn/ListColumn';
import { mapOrder } from '~/utils/sorts';
import {DndContext, DragOverlay, defaultDropAnimationSideEffects, closestCorners, getFirstCollision, closestCenter, PointerSensor, useSensor, useSensors} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import Column from './ListColumn/Column/Column';
import Card from './ListColumn/Column/ListCard/Card/Card';
import {pointerWithin, rectIntersection} from '@dnd-kit/core';
import { generatePlaceholderCard } from '~/utils/formatters';

function customCollisionDetectionAlgorithm(args) {
  // First, let's see if there are any collisions with the pointer
  const pointerCollisions = pointerWithin(args);
  
  // Collision detection algorithms return an array of collisions
  if (pointerCollisions.length > 0) {
    return pointerCollisions;
  }
  
  // If there are no collisions with the pointer, return rectangle intersections
  return rectIntersection(args);
};
const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
    CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

const BoardContent = ({board, moveColumns, moveCardInTheSameColumn, moveCardToDifferentColumn}) => {
    const [orderedColumns, setOrderedColumns] = useState([])
    const [activeDragItemId, setActiveDragItemId] = useState(null)
    const [activeDragItemType, setActiveDragItemType] = useState(null)
    const [activeDragItemData, setActiveDragItemData] = useState(null)
    const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] = useState(null)
    const lastOverId = useRef(null)


    const pointerSensor = useSensor(PointerSensor, {activationConstraint: {distance: 10}})
    const sensors = useSensors(pointerSensor)

    useEffect(() => {
        setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
    }, [board])

    const findColumnByCardId = (cardId) => {
        return orderedColumns.find(column => column.cards.map(card => card._id)?.includes(cardId))
    }
    const moveCardBetweenDifferentColumn = (
        overColumn,
        overCardId,
        active,
        over,
        activeColumn,
        activeDraggingCardId,
        activeDraggingCardData,
        triggerFrom
    ) => {
        setOrderedColumns(prevColumn => {
            const overCardIndex = overColumn.cards?.findIndex(card => card._id == overCardId)
            let newCardIndex
            const isBelowOverItem = active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height;

            const modifier = isBelowOverItem ? 1 : 0;

            newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn.cards.length + 1;
            const nextColumns = cloneDeep(prevColumn)
            const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
            const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)
            
            if(nextActiveColumn) {
                nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)
                if(isEmpty(nextActiveColumn.cards)) {
                    nextActiveColumn.cards = [generatePlaceholderCard(nextActiveColumn)]
                }

                nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
            }
            if(nextOverColumn) {
                nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)
                const rebuild_activeDraggingCardData = {
                    ...activeDraggingCardData,
                    columnId: nextOverColumn._id
                }
                nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, rebuild_activeDraggingCardData)

                nextOverColumn.cards = nextOverColumn.cards.filter(card => !card.FE_PlaceholderCard)
                nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)
            }
            if (triggerFrom === 'handleDragEnd') {
                moveCardToDifferentColumn(activeDraggingCardId, oldColumnWhenDraggingCard._id, nextOverColumn._id, nextColumns)
            }
            return nextColumns
        })
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
            moveCardBetweenDifferentColumn(
                overColumn,
                overCardId,
                active,
                over,
                activeColumn,
                activeDraggingCardId,
                activeDraggingCardData,
                'handleDragOver'
            )
        }
    }
    const handleDragEnd = (event) => {
        const {active, over} = event
        if(!over) return
        if(!active || !over) return

        if(activeDragItemType == ACTIVE_DRAG_ITEM_TYPE.CARD) {
            const {id: activeDraggingCardId,  data: {current: activeDraggingCardData}} = active
            const {id: overCardId} = over
    
            const activeColumn = findColumnByCardId(activeDraggingCardId)
            const overColumn = findColumnByCardId(overCardId)
    
            if(!activeColumn || !overColumn) return
            if(oldColumnWhenDraggingCard._id !== overColumn._id) {
                moveCardBetweenDifferentColumn(
                    overColumn,
                    overCardId,
                    active,
                    over,
                    activeColumn,
                    activeDraggingCardId,
                    activeDraggingCardData, 
                    'handleDragEnd'
                )
            } 
            else {
                const oldCardIndex = oldColumnWhenDraggingCard?.cards?.findIndex(c => c._id == activeDragItemId)
                const newCardIndex = overColumn?.cards?.findIndex(c => c._id == overCardId)
                const dndOrderedCards = arrayMove(oldColumnWhenDraggingCard?.cards, oldCardIndex, newCardIndex)
                const dndOrderedCardIds = dndOrderedCards.map(card => card._id)
                setOrderedColumns(prevColumn => {
                    const nextColumns = cloneDeep(prevColumn)
                    const targetColumn= nextColumns.find(column => column._id === overColumn._id)
                    targetColumn.cards = dndOrderedCards
                    targetColumn.cardOrderIds = dndOrderedCardIds
                    return nextColumns
                })
                moveCardInTheSameColumn(dndOrderedCards, dndOrderedCardIds, oldColumnWhenDraggingCard._id)
            }

        }

        if(activeDragItemType == ACTIVE_DRAG_ITEM_TYPE.COLUMN && active.id !== over.id) {
            const oldColumnIndex = orderedColumns.findIndex(c => c._id == active.id)
            const newColumnIndex = orderedColumns.findIndex(c => c._id == over.id)
            const dndOrderedColumns = arrayMove(orderedColumns, oldColumnIndex, newColumnIndex)

            setOrderedColumns(dndOrderedColumns)
            moveColumns(dndOrderedColumns)

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
    const collisionDetectionStrategy = useCallback((args) => {
        if (activeDragItemType == ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
            return closestCorners({...args})
        }
        const pointerIntersection = pointerWithin(args)
        if(!pointerIntersection?.length) return
        // const intersections = pointerIntersection?.length > 0 ? pointerIntersection : rectIntersection(args)

        let overId = getFirstCollision(pointerIntersection, 'id')
        if (overId) {
            const checkColumn = orderedColumns.find(column => column._id === overId)
            if (checkColumn) {
                overId = closestCorners({
                    ...args,
                    droppableContainers: args.droppableContainers.filter(container => {
                        return (container.id !== overId) && (checkColumn?.cardOrderIds.includes(container.id))
                    })
                })[0]?.id
            }

            lastOverId.current = overId
            return[{id: overId}]
        }
        return lastOverId.current ? [{id: lastOverId.current}] : []
    }, [activeDragItemType, orderedColumns])
    return (
        <DndContext sensors={sensors} collisionDetection={collisionDetectionStrategy} onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>

            <Box sx={{
                bgcolor: '#95a5a6', 
                width: '100%',
                height: (theme) => theme.workWithMe.boardContentHeight,
                display: 'flex',
                p: '10px 0'

            }}>
                <ListColumn 
                columns={orderedColumns}
                ></ListColumn>
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
