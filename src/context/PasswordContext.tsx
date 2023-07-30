import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

import passwordCrackingSpeed from 'static/passwordCrackingSpeed.json'

interface PasswordContextInterface {
	password: string
	setPassword: (password: string) => void
	passwordLength: number
	hasPasswordNumber: boolean
	hasPasswordLowerCase: boolean
	hasPasswordUpperCase: boolean
	hasPasswordSpecialChar: boolean
	hasPasswordLength: boolean
	crackingTime: string
}


const PasswordContext = createContext<PasswordContextInterface>(null!)

export function PasswordContextProvider({ children }: { children: ReactNode }) {

	const [password, setPassword] = useState<string>('')

	const passwordLength = useMemo(() => {
		return password.length
	}, [password])

	const hasPasswordNumber = useMemo(() => {
		return /\d/.test(password)
	}, [password])

	const hasPasswordLowerCase = useMemo(() => {
		return /[a-z]/.test(password)
	}, [password])

	const hasPasswordUpperCase = useMemo(() => {
		return /[A-Z]/.test(password)
	}, [password])

	const hasPasswordSpecialChar = useMemo(() => {
		return /[^A-Za-z0-9]/.test(password)
	}, [password])

	const hasPasswordLength = useMemo(() => {
		return password.length >= 8
	}, [password])

	const crackingTime = useMemo(() => {
		try{
			const crackingTimePerLengthArray = passwordCrackingSpeed.speed[passwordLength]

			const secureIndex = Number(hasPasswordNumber) +
			Number(hasPasswordLowerCase && hasPasswordUpperCase) +
			Number(hasPasswordNumber && hasPasswordLowerCase && hasPasswordUpperCase) +
			Number(hasPasswordNumber && hasPasswordLowerCase && hasPasswordUpperCase && hasPasswordSpecialChar)

			const crackingTime = crackingTimePerLengthArray[secureIndex]

			if (crackingTime)
				return crackingTime
			else
				return '∞'
		} catch (error) {
			return '∞'
		}

	}, [passwordLength])


	const value = { password, setPassword, hasPasswordNumber, hasPasswordLowerCase, hasPasswordUpperCase, hasPasswordSpecialChar, hasPasswordLength, passwordLength, crackingTime }

	return <PasswordContext.Provider value={value}>{children}</PasswordContext.Provider>
}

export function usePasswordContext() {
	return useContext(PasswordContext)
}
