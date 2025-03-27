
import React from 'react'
import Box from '@mui/material/Box'
import Column from './Column/Column';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ListColumn = () => {

    return (
        <Box sx={{
            bgcolor: 'inherit',
            width: '100%',
            height: '100%',
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden',
        }}>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>

            <Box sx={{
                minWidth: '200px',
                maxWidth: '200px',
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
        </Box>
    );
}

export default ListColumn;
