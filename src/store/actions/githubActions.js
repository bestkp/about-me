import request from '../../utils/request'
import {createAction} from 'redux-actions'
import {GET_GITHUB_INITIATE, GET_GITHUB_SUCCESS, GET_GITHUB_FAIL, CHAGE_USER_ID} from '../contants/actionTypes'

import {showSpinner, hideSpinner} from './uiActions'

export const getGithub = (userId = 'torvalds') => {
  return (dispatch) => {
    dispatch({ type: GET_GITHUB_INITIATE });
    dispatch(showSpinner());
    request('https://api.github.com/users/torvalds', 'get')
      .then(function(response) { 
        return response.json() 
      })
      .then(function(json) { 
        dispatch({ type: GET_GITHUB_SUCCESS, payload: { data: json } });
        dispatch(hideSpinner());
      })
      .catch(function(response) { dispatch({ type: GET_GITHUB_FAIL, payload: {data: response} }) });
  }
}
export const changeUserId = (text) => ({ type: CHAGE_USER_ID, payload: { userId: text } });
// export const changeUserId = createAction(CHAGE_USER_ID, userId => {payload: {userId}});