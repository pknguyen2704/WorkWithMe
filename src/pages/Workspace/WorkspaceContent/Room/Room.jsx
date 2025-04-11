import React from 'react';
import RoomBar from './RoomBar/RoomBar';
import { Container } from '@mui/material';
import PublicRoom from './PublicRoom/PublicRoom';

const Room = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{height: '100vh'}}>
      <RoomBar/>
      <PublicRoom></PublicRoom>
    </Container>
  );
}

export default Room;
