import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '~/App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider} from '@mui/material/styles'
import theme from '~/theme'
import { ToastContainer} from 'react-toastify'
import { ConfirmProvider } from "material-ui-confirm"

// config redux
import { Provider } from 'react-redux'
import { store } from '~/redux/store'
// cau hinh react router dom
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <CssVarsProvider theme={theme}>
        <ConfirmProvider defaultOptions={{
              allowClose: false,
              dialogProps: {
                  maxWidth: 'xs',
              },
              confirmationButtonProps: {
                  color: 'secondary', 
                  variant: 'outlined'
              },
              cancellationButtonProps: {
                  color: 'inherit'

              },
        }}>
          <CssBaseline />
          <App />
          <ToastContainer position="bottom-right" theme="colored"/>
        
        </ConfirmProvider>
      </CssVarsProvider>
    </Provider>
  </BrowserRouter>
)
