import { Navigate } from 'react-router-dom';

export function PrivateRoute(props: any) {
	const { children } = props
	const isLoginSuccess = true

	if (!isLoginSuccess) {
		return <Navigate to="/column" />
	}

	return children;
}