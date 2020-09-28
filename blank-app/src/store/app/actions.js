import * as actionTypes from './actionTypes'
import { normalizingUserData } from 'utils'

// export const OActionTypes = {
// 	prefix: '@app',
// };

export const getAllContacts = () => {
	return {
		type: actionTypes.GET_ALL_CONTACTS
	}	
}

export const getAllContactsSuccess = (data) => {
	return {
		type: actionTypes.GET_ALL_CONTACTS_SUCCESS,
		data: normalizingUserData(data.results)
	}
}

export const getAllContactsFail = (error) => {
	return {
		type: actionTypes.GET_ALL_CONTACTS_FAIL,
		error
	}
}