import { FC } from 'react'

import { Typography } from '@mui/material'

interface PasswordAttributeI {
	attribute: string
	value: boolean
}

const PasswordAttribute: FC<PasswordAttributeI> = ({attribute, value}) => {
	return (
		<Typography variant='h6' color={value ? 'success.main' : 'error.main'}>
			{attribute}
		</Typography>
	)
}

export default PasswordAttribute
