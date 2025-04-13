import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mockData'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI, createNewColumnAPI, createNewCardAPI, updateBoardDetailsAPI, updateColumnDetailsAPI, moveCardToDifferentColumnAPI, deleteColumnDetailsAPI} from '~/apis'
import { generatePlaceholderCard } from '~/utils/formatters'
import {isEmpty} from 'lodash'
import { toast } from 'react-toastify'

function Board() {
    const [board, setBoard] = useState(null)
    useEffect(() => {
        const boardID = '67faa39a8ace97b79ca060ec'
        fetchBoardDetailsAPI(boardID).then((board) => {
            board.columns.forEach(column => {
                if(isEmpty(column.cards)) {
                    column.cards = [generatePlaceholderCard(column)]
                    column.cardOrderIds = [generatePlaceholderCard(column)._id]
                }
            });
            setBoard(board)
        })
    }, [])

    const createNewColumn = async(newColumnData) => {
        const createdColumn = await createNewColumnAPI( {
            ...newColumnData,
            boardId: board._id
            }
        )

        createdColumn.cards = [generatePlaceholderCard(createdColumn)]
        createdColumn.cardOrderIds = [generatePlaceholderCard(createdColumn)._id]
        const newBoard = {...board}
        newBoard.columns.push(createdColumn)
        newBoard.columnOrderIds.push(createdColumn._id)
        setBoard(newBoard)
    }
    const createNewCard = async(newCardData) => {
        const createdCard = await createNewCardAPI( {
            ...newCardData,
            boardId: board._id,
            }
        )
        const newBoard = {...board}
        const columnToUpdate =newBoard.columns.find(column => column._id === createdCard.columnId)
        if(columnToUpdate) {
            if (columnToUpdate.cards.some(card => card.FE_PlaceholderCard)) {
                columnToUpdate.cards = [createdCard]
                columnToUpdate.cardOrderIds = [createdCard._id]
            }else {
                columnToUpdate.cards.push(createdCard)
                columnToUpdate.cardOrderIds.push(createdCard._id)
            }

        }
        setBoard(newBoard)
    }
    const moveColumns = (dndOrderedColumns) => {
        const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
        const newBoard = {...board}
        newBoard.columns = dndOrderedColumns
        newBoard.columnOrderIds = dndOrderedColumnsIds
        setBoard(newBoard)

        // call API
        updateBoardDetailsAPI(newBoard._id, { columnOrderIds: newBoard.columnOrderIds})

    }

    const moveCardInTheSameColumn = (dndOrderedCards, dndOrderedCardIds, columnId) => {
        const newBoard = {...board}
        const columnToUpdate =newBoard.columns.find(column => column._id === columnId)
        if(columnToUpdate) {
            columnToUpdate.cards = dndOrderedCards
            columnToUpdate.cardOrderIds = dndOrderedCardIds
        }
        setBoard(newBoard)
        updateColumnDetailsAPI(columnId, {cardOrderIds: dndOrderedCardIds})


    }
    const moveCardToDifferentColumn = (currentCardId, prevColumnId, nextColumnId, dndOrderedColumns) => {
        const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
        const newBoard = {...board}
        newBoard.columns = dndOrderedColumns
        newBoard.columnOrderIds = dndOrderedColumnsIds
        setBoard(newBoard)

        let prevCardOrderIds = dndOrderedColumns.find(c => c._id === prevColumnId)?.cardOrderIds
        console.log(prevCardOrderIds)
        if(prevCardOrderIds[0].includes('-placeholder-card')) prevCardOrderIds = []
        console.log(prevCardOrderIds)
        
        moveCardToDifferentColumnAPI({
            currentCardId,
            prevColumnId,
            prevCardOrderIds,
            nextColumnId,
            nextCardOrderIds: dndOrderedColumns.find(c => c._id === nextColumnId)?.cardOrderIds
        })
        
    }

    const deleteColumnDetails = (columnId) => {
        const newBoard = {...board}
        newBoard.columns = newBoard.columns.filter(c => c._id !== columnId)
        newBoard.columnOrderIds = newBoard.columnOrderIds.filter(c => c._id !== columnId)
        setBoard(newBoard)
        deleteColumnDetailsAPI(columnId).then(res => {
            toast.success(res?.deleteResult)
        })
    }
    return (
        <Container disableGutters maxWidth={false} sx={{height: '100vh'}}>
            <AppBar></AppBar>
            <BoardBar board={board}></BoardBar>
            <BoardContent 
                board={board} 

                createNewColumn = {createNewColumn}
                createNewCard = {createNewCard}
                moveColumns = {moveColumns}
                moveCardInTheSameColumn = {moveCardInTheSameColumn}
                moveCardToDifferentColumn = {moveCardToDifferentColumn}
                deleteColumnDetails = {deleteColumnDetails}
            ></BoardContent>
        </Container>
    );
}

export default Board;
