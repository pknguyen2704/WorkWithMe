import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PublicIcon from '@mui/icons-material/Public'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Button, Tooltip } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLE = {
    color:'white',
    bgcolor: 'transparent',
    border: 'none',
    paddingX: '5px',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': { 
        color: 'white',
    },
    '&:hover': {
        bgcolor: 'primary.50'
    }
}
const BoardBar = (props) => {
    const board = props.board 
    return (
        <div>
            <Box sx={{
                width: '100%',
                height:(theme) => theme.workWithMe.boardBarHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                paddingX: 2,
                overflowX: 'auto',
                // borderBottom: '1px solid white',
                bgcolor: (theme) => (theme.palette.mode==='dark' ? '#2c3e50' : '#34495e')
            }}>
            <Box sx={{display:'flex', alignItems: 'center', gap: 2}}>
                <Chip 
                    sx={MENU_STYLE}
                    icon={<DashboardIcon />} 
                    label={board?.title}
                    clickable
                />
                <Chip 
                    sx={MENU_STYLE}
                    icon={<PublicIcon />} 
                    label={capitalizeFirstLetter(board?.type)}
                    clickable
                />
                <Chip 
                    sx={MENU_STYLE}
                    icon={<AddToDriveIcon />} 
                    label="Add to Google Drive" 
                    clickable
                />
                <Chip 
                    sx={MENU_STYLE}
                    icon={<BoltIcon />} 
                    label="Automation" 
                    clickable
                />
                <Chip 
                    sx={MENU_STYLE}
                    icon={<FilterAltIcon />} 
                    label="Filter" 
                    clickable
                />
            </Box>
            <Box sx={{display:'flex', alignItems: 'center', gap: 2}}>
                <Button 
                    variant='outlined' 
                    startIcon={<PersonAddIcon/>}
                    sx={{
                        color:'white',
                        borderColor: 'white',
                        '&:hover': {
                            borderColor: 'white'
                        }
                    }}
                >
                
                    Invite
                </Button>
                <AvatarGroup 
                    max={4} 
                    sx={{
                        gap: '10px',
                        '& .MuiAvatar-root': {
                            width: 34,
                            height: 34,
                            fontSize: 16,
                            border: 'none'
                        }
                    }}
                >
                    <Tooltip title='UserAvatar'>
                        <Avatar 
                            alt="Remy Sharp" 
                            src="/static/images/avatar/1.jpg" />
                    </Tooltip>

                </AvatarGroup>
            </Box>
            </Box>
        </div>
    );
}

export default BoardBar;
