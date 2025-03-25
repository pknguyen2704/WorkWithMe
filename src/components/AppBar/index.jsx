import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps';
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as workWithMeLogo } from '~/assets/wwm.svg';
import Typography from '@mui/material/Typography';

import Workspace from './Menus/Workspaces'
import Home from './Menus/Home';
import Pomodoro from './Menus/Pomodoro';
const AppBar = () => {
    return (
        <div>
            <Box px={2} sx={{
                width: '100%',
                height: (theme) => theme.workWithMe.appBarHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
                
            }}>
            <Box sx={{display:'flex', alignItems: 'center', gap: 2}}>
                <AppsIcon sx={{
                    color: 'primary.main'
                }}></AppsIcon>
                <Box sx={{display:'flex', alignItems: 'center', gap: 0.5}}>
                    <SvgIcon component={workWithMeLogo} inheritViewBox  sx={{color: 'primary.main'}}/>
                    <Typography variant='span' sx={{fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main'}}>WorkWithMe</Typography>
                </Box>
                <Home></Home>
                <Pomodoro></Pomodoro>
                <Workspace></Workspace>
            </Box>
            <Box>
                Avatar
            </Box>
            </Box>
        </div>
    );
}

export default AppBar;
