import { experimental_extendTheme as extendTheme} from '@mui/material/styles'
import { teal, deepOrange, cyan, orange } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
    workWithMe: {
        appBarHeight: '58px',
        boardBarHeight: '60px'
    },
    colorSchemes: {
        light: {
            palette: {
                primary: teal,
                secondary: deepOrange
            }
        },
        dark: {
            palette: {
                primary: cyan,
                secondary: orange
            }
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontSize: '1rem'
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({theme}) => ({
                        color: theme.palette.primary.main,
                        fontSize: '0.875 rem',
                        '.MuiOutlinedInput-notchedOutline': {
                                borderColor: theme.palette.primary.light
                        },
                        '&:hover': {
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: theme.palette.primary.main
                            }
                        },
                        '& fieldset': {
                            borderWidth: '2px !important'
                        }
                }),
            },
        },
    },
});

export default theme