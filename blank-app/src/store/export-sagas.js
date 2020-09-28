import axios from 'axios'
import { put } from 'redux-saga/effects'
import * as actions from './app/actions'
import { randomIntegerInRange, errorHandler } from 'utils'

// Fetching random number of persons from API
function* getAllContacts() {
    const userNum = randomIntegerInRange( 10, 200 )
    try {
        const response = yield axios.get(`https://randomuser.me/api/1.3?seed=nikol-test&results=${userNum}`)
        yield put(actions.getAllContactsSuccess(response.data))
    } catch (error) {
        console.log(error)
        yield put(actions.getAllContactsFail(error))
        yield errorHandler(error.message)
    } 
}

export {
    getAllContacts
}
