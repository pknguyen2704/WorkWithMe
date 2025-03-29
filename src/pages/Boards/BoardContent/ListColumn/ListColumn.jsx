
import React from 'react'
import Box from '@mui/material/Box'
import Column from './Column/Column';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {SortableContext, horizontalListSortingStrategy} from '@dnd-kit/sortable';

const ListColumn = ({columns}) => {

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
                return <Column key={column._id} column={column}/>
            })}


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
        </SortableContext>
    );
}

export default ListColumn;
