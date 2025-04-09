import { experimental_extendTheme as extendTheme} from '@mui/material/styles'
// import { teal, deepOrange, cyan, orange } from '@mui/material/colors'

const APP_BAR_HEIGHT = '56px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const POMODORO_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT})`
const WORKSPACE_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT})`
const WORKSPACE_BAR_HEIGHT = '60px'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'
const TASK_FOOTER_HEIGHT = '60px'

const theme = extendTheme({
    workWithMe: {
        appBarHeight: APP_BAR_HEIGHT,
        boardBarHeight: BOARD_BAR_HEIGHT,
        boardContentHeight: BOARD_CONTENT_HEIGHT,
        columnHeaderHeight: COLUMN_HEADER_HEIGHT,
        columnFooterHeight: COLUMN_FOOTER_HEIGHT,
        pomodoroContentHeight: POMODORO_CONTENT_HEIGHT,
        taskFooterHeight: TASK_FOOTER_HEIGHT,
        workspaceContentHeight: WORKSPACE_CONTENT_HEIGHT,
        workspaceBarHeight: WORKSPACE_BAR_HEIGHT
    },
    colorSchemes: {
        // light: {
        //     palette: {
        //         primary: teal,
        //         secondary: deepOrange
        //     }
        // },
        // dark: {
        //     palette: {
        //         primary: cyan,
        //         secondary: orange
        //     }
        // }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontSize: '0.875rem',
                    // color: 'white',
                    // borderWidth: '0.5px',
                    // borderColor: 'white',
                    // '&:hover': {
                    //     borderWidth: '0.5px',
                    //     borderColor: 'white'
                    // },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    '&.MuiTypography-body1': {
                        fontSize: '0.875rem'
                    }
                    // color: 'white',
                    // borderWidth: '0.5px',
                    // borderColor: 'white',
                    // '&:hover': {
                    //     borderWidth: '0.5px',
                    //     borderColor: 'white'
                    // },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    // color: theme.palette.primary.main,
                    fontSize: '0.875 rem'
                }),
            },
        }, 
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({theme}) => ({
                        // color: theme.palette.primary.main,
                        fontSize: '0.875 rem',
                        // '.MuiOutlinedInput-notchedOutline': {
                        //         borderColor: theme.palette.primary.light
                        // },
                        // '&:hover': {
                        //     '.MuiOutlinedInput-notchedOutline': {
                        //         borderColor: theme.palette.primary.main
                        //     }
                        // },
                        '& fieldset': {
                            borderWidth: '0.5px !important'
                        },
                        '&:hover fieldset': {
                            borderWidth: '1px !important'
                        },
                        '&.Mui-focused fieldset': {
                            borderWidth: '1px !important'
                        }
                }),
            },
        },
    },
});

export default theme