/**
 * Define App configuration variables
 */

const config = {
	appName: 'CBST Digital Campus',
	appTitle: 'CBST',
	tagLine: 'Digital Campus',
	currencySymbol: '$',
	supportEmail: 'suport@cbst.com',
	environment: 'development', // development/production
	production: {
		api_url: 'http://localhost:8000/api/',
		app_url: 'http://localhost:3000',
	},
	development: {
		api_url: 'http://localhost:8000/api/',
		app_url: 'http://localhost:3000',
	},
};

export default config;
