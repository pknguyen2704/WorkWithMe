import * as React from 'react';
import { useRef } from 'react';
import { Box, Typography } from '@mui/material';

const Cam = () => {
    const textareaRef = React.useRef(null);

    const handleTextareaFocus = () => {
      textareaRef.current?.focus();
    };
    const videoRef = useRef();
    const getWebcam = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
        videoRef.current.srcObject = stream;
        }
    }
    // getWebcam();
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '23%', 
            bgcolor: 'blue',
            borderRadius: '10px'
        }}>
            
            <video ref={videoRef} autoPlay={true} style={{
                borderRadius: '10px 10px 0 0', 
                width: '100%',
                aspectRatio: '16 / 9',
                objectFit: 'cover',
                }}/>
            <Typography variant='6' sx={{
                bgcolor:  'rgb(0, 0, 0, 0.5)',
                width: '100%',
                border: '1px solid black',
                borderRadius: '0 0 10px 10px',
                color: 'white',
                p: '0 8px'
            }}>Fighting !!!</Typography>
        </Box>
    );
}

export default Cam;
