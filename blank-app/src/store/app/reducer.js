import { createReducer } from '../utils';
// import { OActionTypes as app } from './actions';

export const initialState = {
	person: [],
	error: '',
	loading: false
};

export const reducer = createReducer(initialState, {
	'@@router/LOCATION_CHANGE'(state) {
		return state;
	},
	'GET_ALL_CONTACTS'(state, action) {
		return {
			...state,
			loading: true
		}
	},
	'GET_ALL_CONTACTS_SUCCESS'(state, action) {
		return {
			...state, 
		   person: action.data,
		   loading: false
		}
	},
	'GET_ALL_CONTACTS_FAIL'(state, action) {
		return {
			...state, 
		   error: action.error.message,
		   loading: false
		}
	}
});