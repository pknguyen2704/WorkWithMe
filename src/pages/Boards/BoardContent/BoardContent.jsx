import React from 'react'
import Box from '@mui/material/Box'
import ListColumn from './ListColumn/ListColumn';
import { mapOrder } from '~/utils/sorts';

const BoardContent = ({board}) => {
    const orderdColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    return (
        <Box sx={{
            backgroundColor: (theme) => (theme.palette.mode==='dark' ? '#2c3e50' : '#34495e'), 
            width: '100%',
            height: (theme) => theme.workWithMe.boardContentHeight,
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden'

        }}>
            <ListColumn columns={orderdColumns}></ListColumn>

        </Box>
    );
}

export default BoardContent;
