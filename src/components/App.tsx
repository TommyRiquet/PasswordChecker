import { FC } from 'react'

import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'

import { AppRoutes } from './Routes'

import MainScreen from './app/MainScreen'

const App: FC = () => {

	return (
		<Box height='100%'>
			<Routes>
				<Route path='/' element={<MainScreen/>}>
					{
						AppRoutes.map(route => {
							return (
								<Route
									key={route.path}
									path={route.path}
									element={route.view}
								/>
							)
						})
					}
				</Route>
			</Routes>
		</Box>
	)
}

export default App
