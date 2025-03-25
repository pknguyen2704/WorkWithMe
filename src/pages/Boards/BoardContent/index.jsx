import Box from '@mui/material/Box'
const BoardContent = () => {
    return (
        <div>
            <Box sx={{
                backgroundColor: 'primary.main',
                width: '100%',
                height: (theme) => `calc(100vh - ${theme.workWithMe.appBarHeight} - ${theme.workWithMe.boardBarHeight})`,
                display: 'flex',
                alignItems: 'center'
            }}>
            Content
            </Box>
        </div>
    );
}

export default BoardContent;
