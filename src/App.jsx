import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import theme from './theme'

function App() {

  return (
    <Container disableGutters maxWidth={false} sx={{height: '100vh'}}>
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.workWithMe.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
      Work With Me
      </Box>
      <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height:(theme) => theme.workWithMe.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        Board bar
      </Box>
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) => `calc(100vh - ${theme.workWithMe.appBarHeight} - ${theme.workWithMe.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}>
      Content
      </Box>
    </Container>
  )
}

export default App
