import { ReactNode, createContext, useContext } from 'react'

import { isMobile } from 'react-device-detect'

interface GlobalContextInterface {
    isMobile: boolean
}


const GlobalContext = createContext<GlobalContextInterface>(null!)

export function GlobalContextProvider({ children }: { children: ReactNode }) {

	const value = { isMobile }

	return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

export function useGlobalContext() {
	return useContext(GlobalContext)
}
