import store from 'store';
import storKey from '../constants/storageType';

const LocalStorage = {
	// Checked if user logged in or not
	isLoggedIn: function () {
		const accessToken = store.get(storKey.ACCESS_TOKEN);
		return accessToken && accessToken.length > 0;
	},
	/**
	 * User logged in continue
	 * @param {*} access_token : login token
	 * @param {*} exp : token expire time in minutes
	 * @param {*} identity : user data to store
	 */
	persisLogin: function (access_token : string, identity: Record<string, unknown>) {
		// const convertToMilliseconds = expires_in_minutes * 60 * 1000;
		// const expiration = new Date().getTime() + convertToMilliseconds;

		store.set(storKey.AUTH_USER, identity);
		store.set(storKey.ACCESS_TOKEN, access_token);
	},
	/**
	 * Logout: Remove all data from storage
	 */
	logout: function () {
		store.remove(storKey.ACCESS_TOKEN);
		store.remove(storKey.AUTH_USER);
	},
	/**
	 * Get access token form storage
	 */
	getAccessToken: function () {
		return store.get(storKey.ACCESS_TOKEN);
	},
	/**
	 * Get logged in user data
	 */
	getAuthUser: function () {
		return store.get(storKey.AUTH_USER);
	},
	/**
	 * Set value by key paire into store
	 */
	setValue: function (key: string, value: unknown) {
		store.set(key, value);
	},
	/**
	 * Get value from store
	 */
	getValue: function (key: string) {
		return store.get(key);
	},
	/**
	 * Remove value from store
	 */
	removeValue: function (key: string) {
		return store.remove(key);
	},
	/**
	 * Clear all store
	 */
	cleanStore: function () {
		store.clearAll();
	},
};

export default LocalStorage;
