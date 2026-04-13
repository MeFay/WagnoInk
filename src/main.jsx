// This is the entry point of the app — it mounts everything into the #root div in index.html.
// ThemeProvider passes my custom MUI theme to every component in the tree.
// CssBaseline resets browser default styles so the app looks consistent everywhere.
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App'
import theme from './styles/theme'
import './i18n' // importing i18n here initialises the translation system before the app renders

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)