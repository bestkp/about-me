import {handleActions} from 'redux-actions'
import {uiState} from '../contants/models'
const uiReducers = handleActions({
  SHOW_SPINNER: (state) => (
    state.set(
      'spinner',
      true
    )
  ),
  HIDE_SPINNER: (state) => (
    state.set(
      'spinner',
      false
    )
  ),
}, uiState);

export default uiReducers;