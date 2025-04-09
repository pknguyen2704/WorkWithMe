import React from 'react';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import RoomBar from './RoomBar/RoomBar';
import PublicRoom from './PublicRoom/PublicRoom';

const WorkspaceContent = () => {
    return (
        <Box sx={{
            height: (theme) => theme.workWithMe.workspaceContentHeight,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
            bgcolor: 'rgb(248, 250, 255)'
        }}>
            {/* <PublicRoom></PublicRoom> */}
            {/* <RoomBar/> */}
            <Typography variant='6' sx={{
                fontWeight: '600',
                fontSize: '3rem'
            }}> Join a Focus Room</Typography>
            <Box sx={{
                display: 'flex',
                gap: 2
            }}>
                <Box sx={{
                    width: '400px',
                    height:'fit-content',
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    bgcolor: 'rgb(210, 231, 255)',
                    borderRadius: '16px',
                    p: '8px',
                    gap: 1
                }}>
                    <Box sx={{
                        bgcolor: 'white',
                        color: 'black',
                        borderRadius: '12px',
                        p: '16px',
                        gap: 2
                    }}>
                        <Typography variant='6' sx={{
                            fontWeight: 'bold'
                        }}>
                            Public room
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <PersonIcon></PersonIcon>
                            <Typography sx={{
                            }}>
                                xxx Online
                            </Typography>

                        </Box>
                    </Box>
                    <Button variant="contained" sx={{
                        borderRadius: '12px',
                        width:`calc(inherit - 8px - 8px)`
                    }}>Join</Button>
                    
                </Box>
                <Box sx={{
                    width: '400px',
                    height:'fit-content',
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    bgcolor: 'rgb(210, 231, 255)',
                    borderRadius: '16px',
                    p: '8px',
                    gap: 1
                }}>
                    <Box sx={{
                        bgcolor: 'white',
                        color: 'black',
                        borderRadius: '12px',
                        p: '16px',
                        gap: 2
                    }}>
                        <Typography variant='6' sx={{
                            fontWeight: 'bold'
                        }}>
                            Private room
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <PersonIcon></PersonIcon>
                            <Typography sx={{
                            }}>
                                xxx Online
                            </Typography>

                        </Box>
                    </Box>
                    <Button variant="contained" sx={{
                        borderRadius: '12px',
                        width:`calc(inherit - 8px - 8px)`
                    }}>Create</Button>
                    
                </Box>
            </Box>
            
        </Box>
    );
}

export default WorkspaceContent;
