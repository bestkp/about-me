import {createAction} from 'redux-actions'
import {SHOW_SPINNER, HIDE_SPINNER} from '../contants/actionTypes'

export const showSpinner = createAction(SHOW_SPINNER)
export const hideSpinner = createAction(HIDE_SPINNER)