
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import PomodoroContent from './PomodoroContent/PomodoroContent';


const Pomodoro = () => {
    return (
        <Container disableGutters maxWidth={false} sx={{height: '100vh'}}>
            <AppBar></AppBar>
            <PomodoroContent/>
        </Container>
    );
}

export default Pomodoro;
