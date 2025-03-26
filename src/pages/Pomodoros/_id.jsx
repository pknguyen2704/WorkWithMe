
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar'
import PomodoroContent from './PomodoroContent';
const Pomodoros = () => {
    return (
        <Container disableGutters maxWidth={false} sx={{height: '100vh'}}>
            <AppBar></AppBar>
            <PomodoroContent></PomodoroContent>
        </Container>
    );
}

export default Pomodoros;
