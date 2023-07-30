import { FC, useState } from 'react'

import { IconButton, InputAdornment, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { usePasswordContext } from 'context/PasswordContext'

const PasswordField: FC = () => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const { password, setPassword } = usePasswordContext()

	return (
		<TextField
			placeholder='Enter your password'
			type={isPasswordVisible ? 'text' : 'password'}
			variant='outlined'
			autoComplete='current-password'
			value={password}
			onChange={(event) => {setPassword(event.target.value)}}
			InputProps={{
				endAdornment: (
					<InputAdornment position='end'>
						<IconButton onClick={() => {setIsPasswordVisible(!isPasswordVisible)}}>
							{isPasswordVisible ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				)
			}}
			sx={{
				width: '100%'
			}}
		/>
	)
}

export default PasswordField
