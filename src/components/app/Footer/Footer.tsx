import { FC } from 'react'

import {  Box, Typography } from '@mui/material'

const Footer:FC = () => {


	return (
		<Box position='absolute' bottom={0} width='100%' textAlign='center'>
			<Typography color='white'>
				© Tommy Riquet 2023
			</Typography>
		</Box>
	)
}

export default Footer
