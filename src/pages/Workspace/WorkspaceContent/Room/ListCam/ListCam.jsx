import React from 'react';
import { Box } from '@mui/material';
import Cam from './Cam/Cam';
import theme from '~/theme';
const ListCam = () => {
    return (
        <Box sx={{
            width: 'inherit',
            maxHeight: (theme) => `calc(${theme.workWithMe.roomHeight} - ${theme.spacing(2)})`,
            display: 'flex',
            // flexDirection: 'row',
            flexWrap: 'wrap',
            borderRadius: '10px', 
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1

          }}>
            <Cam/>
            <Cam/>
            <Cam/>
            <Cam/>
            <Cam/>
            <Cam/>
            <Cam/>
            <Cam/>
            <Cam/>
            <Cam/>
            <Cam/>
            <Cam/>
          </Box>
    );
}

export default ListCam;
