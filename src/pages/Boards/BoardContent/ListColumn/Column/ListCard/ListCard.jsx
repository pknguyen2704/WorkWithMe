import { Divider, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material';
import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';
import Card from './Card/Card';



const ListCard = ({cards}) => {
    return (
        <Box sx={{
            p: '0 5px',
            m: '0 5px',
            display:'flex',
            flexDirection: 'column',
            // p: 2,
            gap: 1,
            overflowX: 'hidden', 
            overflowY: 'auto',
            maxHeight: (theme) => `calc(${theme.workWithMe.boardContentHeight} - ${theme.spacing(5)} - ${(theme) => theme.workWithMe.columnHeaderHeight} - ${(theme) => theme.workWithMe.columnFooterHeight})`
        }}>
        {cards?.map(card => <Card key={card._id} card={card}/>)}
            
        </Box>
    );
}

export default ListCard;
