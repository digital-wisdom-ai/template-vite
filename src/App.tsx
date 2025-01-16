import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from './theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div data-testid='app-root'>
        <h1>Welcome to Your Vite + React App</h1>
        <p>Start editing to see some magic happen!</p>
      </div>
    </ThemeProvider>
  )
}
