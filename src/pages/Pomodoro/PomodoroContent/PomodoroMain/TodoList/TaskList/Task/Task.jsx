import React, { useState } from 'react';
import { Checkbox, Typography, Card as MuiCard, CardContent, Box } from '@mui/material';

const Task = () => {
    const [checked, setChecked] = useState(false);

    const handleToggle = () => {
        setChecked(prev => !prev);
    };
    const handleCheckboxChange = (event) => {
        event.stopPropagation()
        setChecked(event.target.checked)
    };

    return (
        <MuiCard
            onClick={handleToggle}
            sx={{
                
                display: 'flex',
                alignItems: 'center',
                height: '64px',
                borderRadius: '8px',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                backgroundColor: checked ? '#7f8c8d' : 'white',
                cursor: 'pointer',
            }}
        >
            <Checkbox
                
                onChange={handleCheckboxChange}
                checked={checked}
                sx={{
                    color: checked ? 'white' : 'grey',
                    '&.Mui-checked': {
                        color: 'white',
                    },
                    '& .MuiSvgIcon-root': {
                        fontSize: 28,
                    }
                }}
            />
            <CardContent sx={{
                p: 1.5,
                '&:last-child': {
                    p: 1.5
                }
            }}>
                <Typography
                    sx={{
                        fontWeight: 600,
                        color: checked ? '#b0b0b0' : '#333',
                        textDecoration: checked ? 'line-through' : 'none',
                        fontSize: '1rem !important' 
                    }}
                >
                    Làm xong website
                </Typography>
            </CardContent>
        </MuiCard>
    );
};

export default Task;
