import Box from '@mui/material/Box'
const BoardContent = () => {
    return (
        <Box sx={{
            backgroundColor: (theme) => (theme.palette.mode==='dark' ? '#2c3e50' : '#34495e'),
            width: '100%',
            height: (theme) => `calc(100vh - ${theme.workWithMe.appBarHeight} - ${theme.workWithMe.boardBarHeight})`,
            display: 'flex',
            alignItems: 'center'
        }}>
        Content
        </Box>
    );
}

export default BoardContent;
