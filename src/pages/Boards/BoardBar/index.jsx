import Box from '@mui/material/Box'

const BoardBar = () => {
    return (
        <div>
            <Box sx={{
                backgroundColor: 'primary.dark',
                width: '100%',
                height:(theme) => theme.workWithMe.boardBarHeight,
                display: 'flex',
                alignItems: 'center'
            }}>
                Board bar
            </Box>
        </div>
    );
}

export default BoardBar;
