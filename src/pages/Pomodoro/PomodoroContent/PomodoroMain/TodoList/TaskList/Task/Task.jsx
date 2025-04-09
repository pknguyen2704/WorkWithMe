import React from 'react';
import { Divider, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {Card as MuiCard} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box'
const Task = () => {
    return (
        <MuiCard sx={{
            cursor:'pointer',
            boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
            overflow: 'unset',
            m: '5px 0'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <CheckBoxIcon></CheckBoxIcon>
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
            </Box>
        </MuiCard>
    );
}

export default Task;
