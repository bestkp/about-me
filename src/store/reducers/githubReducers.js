import {handleActions} from 'redux-actions'
import { gitState } from '../contants/models'
const githubReducers = handleActions({
  GET_GITHUB_SUCCESS: (state, {payload}) => (
    state.merge({
      'data': payload.data,
    })
  ),
  CHAGE_USER_ID: (state, { payload }) => (
    state.merge({
      'userId': payload.userId
    })
  ),
  GET_GITHUB_FAIL: (state, {payload}) => (
    state.merge({
      error: payload.message
    })
  )
}, gitState)

export default githubReducers;