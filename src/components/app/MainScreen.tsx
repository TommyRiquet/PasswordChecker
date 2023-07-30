import { FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'
import Footer from './Footer'

const MainScreen : FC = () => {

	return (
		<Box display='flex' flexDirection='column'>
			<Outlet/>
			<Footer/>
		</Box>
	)
}
export default MainScreen
