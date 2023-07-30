import HomePage from './app/view'


export interface AppRoute {
    path: string
    view: JSX.Element
	visible: boolean
}

const AppRoutes: AppRoute[] = [
	{
		path: '/',
		view: <HomePage/>,
		visible: true
	}
	// {
	// 	path: '*',
	// 	view: <Error/>,
	//	visible: true
	// }
]

export { AppRoutes }
