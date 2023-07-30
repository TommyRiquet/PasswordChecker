import React from 'react'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'

import App from './components/App'

import { GlobalContextProvider } from 'context/GlobalContext'
import { PasswordContextProvider } from 'context/PasswordContext'

import theme from './theme'

import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalContextProvider>
				<PasswordContextProvider>
					<CssBaseline />
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</PasswordContextProvider>
			</GlobalContextProvider>
		</ThemeProvider>
	</React.StrictMode>
)
