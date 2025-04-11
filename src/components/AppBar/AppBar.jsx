import { useState } from 'react';
import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps';
import SvgIcon from '@mui/material/SvgIcon'
// import { ReactComponent as workWithMeLogo } from '~/assets/wwm.svg';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Workspace from './Menus/Workspaces'
import Home from './Menus/Home';
import Pomodoro from './Menus/Pomodoro';
import TodoLists from './Menus/TodoLists';
import { TextField } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Profiles from './Menus/Profiles';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from '@mui/icons-material/Close';

const AppBar = () => {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div>
            <Box px={2} sx={{
                width: '100%',
                height: (theme) => theme.workWithMe.appBarHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                overflowX: 'auto',
                bgcolor: '#7f8c8d'
            }}>
                <Box sx={{display:'flex', alignItems: 'center', gap: 2, height:'inherit'}}>
                    <AppsIcon sx={{color: 'white'}}></AppsIcon>
                    {/* <Box sx={{display:'flex', alignItems: 'center', gap: 0.5, height: (theme) => theme.workWithMe.appBarHeight}}>
                        <SvgIcon component={workWithMeLogo} inheritViewBox  fontSize='small' sx={{color: 'white'}}/>
                        <Typography variant='span' sx={{fontSize: '1.5rem', fontWeight: 'bold', color: 'white'}}>WorkWithMe</Typography>
                    </Box> */}
                    <Box component='img' src='src/assets/logo.svg' sx={{
                        height: '60%',
                    }}/>

                    <Home></Home>
                    <Pomodoro></Pomodoro>
                    <TodoLists></TodoLists>
                    <Workspace></Workspace>
                </Box>
                <Box sx={{display:'flex', alignItems: 'center', gap: 2}}>
                    <TextField 
                        id="outlined-search" 
                        label="Search...." 
                        type="text"  
                        size='small'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{
                                        color:'white'
                                    }}/>
                                </InputAdornment>
                                ),
                            endAdornment: (
                                <CloseIcon
                                    fontSize='small'
                                    sx={{
                                        color: searchValue ? 'white' : 'transparent',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => setSearchValue('')}
                                />
                            )
                        }}
                        sx={{
                            '& label': {color: 'white'},
                            '& input': {color: 'white'},
                            '& label.Mui-focused': {color: 'white'},
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white'
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white'
                                },
                                '&.Mui-focused fieldset': {borderColor: 'white'},
                            }
                        }}
                        />
                    <Tooltip title="Notification" sx={{cursor:'pointer', color:'white'}}>
                        <Badge color="warning" variant="dot">
                            <NotificationsNoneIcon/>
                        </Badge>
                    </Tooltip>
                    <Profiles></Profiles>
                </Box>
            </Box>
        </div>
    );
}

export default AppBar;
