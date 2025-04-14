import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mockData'
import { useEffect, useState } from 'react'
import { createNewColumnAPI, createNewCardAPI, updateBoardDetailsAPI, updateColumnDetailsAPI, moveCardToDifferentColumnAPI, deleteColumnDetailsAPI} from '~/apis'
import { generatePlaceholderCard } from '~/utils/formatters'
import { isEmpty, cloneDeep } from 'lodash'
import { toast } from 'react-toastify'
import { mapOrder } from '~/utils/sorts'
import { fetchBoardDetailsAPI, updateCurrentActiveBoard, selectCurrentActiveBoard } from '~/redux/activeBoard/activeBoardSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

function Board() {
    const dispatch = useDispatch()
    // const [board, setBoard] = useState(null)
    const board = useSelector(selectCurrentActiveBoard)
    const {boardId} = useParams()
    useEffect(() => {
        // const boardId = '67faa39a8ace97b79ca060ec'

        // call API
        dispatch(fetchBoardDetailsAPI(boardId)) 
        // fetchBoardDetailsAPI(boardID).then((board) => {
        //     board.columns = mapOrder(board.columns, board.columnOrderIds, '_id')
        //     board.columns.forEach(column => {
        //         if(isEmpty(column.cards)) {
        //             column.cards = [generatePlaceholderCard(column)]
        //             column.cardOrderIds = [generatePlaceholderCard(column)._id]
        //         }
        //         else {
        //             column.cards = mapOrder(column.cards, column.cardOrderIds, '_id')
        //         }
        //     })
        //     setBoard(board)
        // })
    }, [dispatch, boardId])

    const moveColumns = (dndOrderedColumns) => {
        const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
        const newBoard = {...board}
        newBoard.columns = dndOrderedColumns
        newBoard.columnOrderIds = dndOrderedColumnsIds
        // setBoard(newBoard)
        dispatch(updateCurrentActiveBoard(newBoard))

        // call API
        updateBoardDetailsAPI(newBoard._id, { columnOrderIds: newBoard.columnOrderIds})

    }

    const moveCardInTheSameColumn = (dndOrderedCards, dndOrderedCardIds, columnId) => {
        // const newBoard = {...board}
        const newBoard = cloneDeep(board)
        const columnToUpdate =newBoard.columns.find(column => column._id === columnId)
        if(columnToUpdate) {
            columnToUpdate.cards = dndOrderedCards
            columnToUpdate.cardOrderIds = dndOrderedCardIds
        }
        // setBoard(newBoard)
        dispatch(updateCurrentActiveBoard(newBoard))

        updateColumnDetailsAPI(columnId, {cardOrderIds: dndOrderedCardIds})


    }
    const moveCardToDifferentColumn = (currentCardId, prevColumnId, nextColumnId, dndOrderedColumns) => {
        const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
        const newBoard = {...board}
        newBoard.columns = dndOrderedColumns
        newBoard.columnOrderIds = dndOrderedColumnsIds
        // setBoard(newBoard)
        dispatch(updateCurrentActiveBoard(newBoard))

        let prevCardOrderIds = dndOrderedColumns.find(c => c._id === prevColumnId)?.cardOrderIds
        // console.log(prevCardOrderIds)
        if(prevCardOrderIds[0].includes('-placeholder-card')) prevCardOrderIds = []
        // console.log(prevCardOrderIds)
        
        moveCardToDifferentColumnAPI({
            currentCardId,
            prevColumnId,
            prevCardOrderIds,
            nextColumnId,
            nextCardOrderIds: dndOrderedColumns.find(c => c._id === nextColumnId)?.cardOrderIds
        })
        
    }

    return (
        <Container disableGutters maxWidth={false} sx={{height: '100vh'}}>
            <AppBar/>
            <BoardBar board={board}></BoardBar>
            <BoardContent 
                board={board} 

                // deleteColumnDetails = {deleteColumnDetails}

                moveColumns = {moveColumns}
                moveCardInTheSameColumn = {moveCardInTheSameColumn}
                moveCardToDifferentColumn = {moveCardToDifferentColumn}
            ></BoardContent>
        </Container>
    );
}

export default Board;
