import { FC } from 'react'

import { Box } from '@mui/material'

import HomePage from './view'
import Footer from './Footer'

const MainScreen : FC = () => {

	return (
		<Box display='flex' flexDirection='column'>
			<HomePage />
			<Footer/>
		</Box>
	)
}
export default MainScreen
