import { Outlet, Navigate } from 'react-router';
import LocalStorage from '@/utils/LocalStorage';

const PrivateRoute = () => {
	/**
	 * Determine if authorized from Access Token
	 */
	const isLoggedIn = LocalStorage.isLoggedIn();
	console.log(isLoggedIn)
	// const authUser = LocalStorage.getAuthUser();
	/**
	 * If authorized, return an outlet that will render child elements
	 * If not, return element that will navigate to home page
	 */
	if (isLoggedIn) {
		return <Outlet />;
	} else {
		LocalStorage.logout();
		return <Navigate to="/" />;
	}
};

export default PrivateRoute;
