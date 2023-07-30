import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	typography: {
		fontFamily: '"Poppins", sans-serif'
	},
	palette: {
		primary: {
			light: '#8a99be',
			main: '#007aff;',
			dark: '#3e4452'
		},
		secondary: {
			light: '#e4eaf9',
			main: '#DCE2F0',
			dark: '#c2c8d5'
		},
		background: {
			default: '#f5f5f5'
		}
	}
})

export default theme
