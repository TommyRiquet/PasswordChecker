import { FC } from 'react'

import { Box } from '@mui/material'

import PasswordCheckerView from '../PasswordCheckerView'

const HomePage: FC = () => {
	return (
		<Box display='flex' justifyContent='center' alignItems='center' height='100vh' sx={{backgroundColor: theme => theme.palette.primary.main}}>
			<PasswordCheckerView />
		</Box>
	)
}

export default HomePage
