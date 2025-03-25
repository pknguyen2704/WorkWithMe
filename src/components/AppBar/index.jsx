import Box from '@mui/material/Box'


const AppBar = () => {
    return (
        <div>
            <Box sx={{
                backgroundColor: 'primary.light',
                width: '100%',
                height: (theme) => theme.workWithMe.appBarHeight,
                display: 'flex',
                alignItems: 'center'
            }}>
            Work With Me
            </Box>
        </div>
    );
}

export default AppBar;
