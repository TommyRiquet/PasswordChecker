import { FC } from 'react'

import { Box, Typography } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'

import PasswordField from './PasswordField'
import { PasswordAttribute } from 'components/common'

import { usePasswordContext } from 'context/PasswordContext'

import theme from 'theme'


const PasswordCheckerView: FC = () => {

	const { hasPasswordLowerCase, hasPasswordNumber, hasPasswordSpecialChar, hasPasswordUpperCase, passwordLength, crackingTime } = usePasswordContext()

	return (
		<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' padding={4} borderRadius={5} sx={{backgroundColor: theme => theme.palette.background.default, userSelect: 'none'}}>
			<Typography variant='h1'>Password <span style={{color: '#007aff'}}>Checker</span></Typography>
			<Box display='flex' flexDirection='row' alignItems='center'>
				<LockIcon fontSize='large' sx={{ color: theme.palette.primary.main }}/>
				<Typography variant='h4'>How <span style={{color: '#007aff'}}>secure</span> is your password ?</Typography>
				<LockIcon fontSize='large' sx={{ color: theme.palette.primary.main }}/>
			</Box>
			<Box padding={2} width='50%'>
				<PasswordField/>
			</Box>
			<Box display='flex' flexDirection='row' justifyContent='space-between' width='100%' padding={2}>
				<PasswordAttribute attribute='Password Length' value={passwordLength >= 8} />
				<PasswordAttribute attribute='Numerical' value={hasPasswordNumber} />
				<PasswordAttribute attribute='Upper & Lower case' value={hasPasswordLowerCase && hasPasswordUpperCase} />
				<PasswordAttribute attribute='Special Characters' value={hasPasswordSpecialChar} />
			</Box>
			<Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' padding={2}>
				<Typography variant='h6'>Time to crack your password:</Typography>
				<Typography variant='h5'>{crackingTime}</Typography>
			</Box>
		</Box>
	)
}

export default PasswordCheckerView
