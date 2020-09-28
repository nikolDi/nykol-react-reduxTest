import { takeEvery } from 'redux-saga/effects';
import { getAllContacts } from './export-sagas';
import * as actionTypes from './app/actionTypes'

export function* rootSaga() {
	yield takeEvery(actionTypes.GET_ALL_CONTACTS, getAllContacts)
}
