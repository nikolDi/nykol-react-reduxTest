import {
	PageHome,
	PageContacts,
	UserDetails
} from 'pages';

const routes = {
	'home': {
		path: '/',
		page: PageHome,
		name: 'Home',
		link () {
			return this.path;
		},
		exact: true,
	},
	'contacts': {
		path: '/contacts',
		page: PageContacts,
		name: 'Contacts',
		link () {
			return this.path;
		},
		exact: true,
	},
	'contacts/:id': {
		path: '/contacts/:id',
		page: UserDetails,
		name: 'UserDetails',
		link () {
			return this.path;
		},
		exact: true,
	}
};

const __ROOT_ROUTE__ = routes.home.link();

export { routes, __ROOT_ROUTE__ };
