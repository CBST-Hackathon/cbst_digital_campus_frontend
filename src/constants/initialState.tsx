import LocalStorage from '@/utils/LocalStorage'
import storageType from './storageType';

const initialState = {
	isFetching: false,
	isSuccess: false,
	isError: false,
	errorMessage: '',
	loading: false,
	sidebar: {
		canvas: false,
	},
	login: {
		isFetching: false,
		isSuccess: false,
		isError: false,
		errorMessage: '',
		toggle_password: false,
		user: LocalStorage.getValue(storageType.AUTH_USER) || {},
	},
};

export default initialState;
