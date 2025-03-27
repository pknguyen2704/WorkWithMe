import React from 'react'
import Box from '@mui/material/Box'
import ListColumn from './ListColumn/ListColumn';


const BoardContent = () => {

    return (
        <Box sx={{
            backgroundColor: 'inherit',
            width: '100%',
            height: 'fit-content',
            // height: (theme) => theme.workWithMe.boardContentHeight,
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden'

        }}>
            <ListColumn></ListColumn>

        </Box>
    );
}

export default BoardContent;
