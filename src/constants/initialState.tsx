import LocalStorage from '../components/LocalStorage';
import storageType from './storageType';

const initialState = {
	isFetching: false,
	isSuccess: false,
	isError: false,
	errorMessage: '',
	loading: false,
	language: LocalStorage.getValue(storageType.LANGUAGE) || 'th',
	supportedLangs: {
		en: 'English',
	},
	translations: {},
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
	administratorLogin: {
		isFetching: false,
		isSuccess: false,
		isError: false,
		errorMessage: '',
		toggle_password: false,
		user: LocalStorage.getValue(storageType.AUTH_USER) || {},
	},
	forgotPass: {
		isFetching: false,
		isSuccess: false,
		isError: false,
		errorMessage: '',
		error: false,
	},
	venue_register: {
		isFetching: false,
		isSuccess: false,
		isError: false,
		errorMessage: '',
		toggle_password: false,
		step: 1,
		stepTitle: 'Login Information',
		businessType: [{ id: 1, name: 'Cafe' }],
		countries: [],
		states: [],
		cities: [],
		formData: {
			email: '',
			password: '',
			confirm_password: '',
			business_name: '',
			business_type: 0,
			country_id: 0,
			state_id: 0,
			city_id: 0,
			is_show_tablet: false,
			is_scan_qrcode: false,
			is_food_delivery: false,
			menu_type: 0,
		},
	},
	venue_menu: {
		menu_category: [],
	},
	user_dashboard: {},

	customer_info: {
		full_name: '',
		email: '',
		mobile: '',
		address: '',
		line_id: '',
		country_id: 0,
		state_id: 0,
		city_id: 0,
		province_id: 0,
		district_id: 0,
		sub_district_id: 0,
		zip_code: '',
	},
};

export default initialState;
