import React from 'react';
import AppBar from '~/components/AppBar/AppBar';
import { Container } from '@mui/material';
import WorkspaceContent from './WorkspaceContent/WorkspaceContent';
const Workspace = () => {
    return (
        <Container disableGutters maxWidth={false} sx={{height: '100vh'}}>
            <AppBar></AppBar>
            <WorkspaceContent/>
        </Container>
    );
}

export default Workspace;
