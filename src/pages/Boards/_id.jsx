import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
// import { mockData } from '~/apis/mockData'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI } from '~/apis'

function Board() {
    const [board, setBoard] = useState(null)
    useEffect(() => {
        const boardID = '67f94fdfe2b38fc65e229ce5'
        fetchBoardDetailsAPI(boardID).then((board) => {
            setBoard(board)
        })
    }, [])
    return (
        <Container disableGutters maxWidth={false} sx={{height: '100vh'}}>
            <AppBar></AppBar>
            <BoardBar board={board}></BoardBar>
            <BoardContent board={board}></BoardContent>
        </Container>
    );
}

export default Board;
