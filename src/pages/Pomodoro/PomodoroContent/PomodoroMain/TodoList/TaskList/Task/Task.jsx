import React from 'react';
import { Divider, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import {Card as MuiCard} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box'

const Task = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <MuiCard sx={{
            display: 'flex',
            cursor:'pointer',
            boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
            overflow: 'unset',
            height: (theme) => theme.workWithMe.taskFooterHeight,
            alignItems:'center',
        }}>
            <Checkbox {...label} />
            <CardContent sx={{
                p: 1.5,
                '&:last-child': {
                    p: 1.5
                }
            }}>
                <Typography>
                Card dau tien
                </Typography>
            </CardContent>
        </MuiCard>
    );
}

export default Task;
