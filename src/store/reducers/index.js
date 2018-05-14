import {combineReducers} from 'redux-immutable'

import ui from './uiReducers'
import github from './githubReducers'
import test from './testReducers'

export default combineReducers({
  ui,
  github,
  test
})