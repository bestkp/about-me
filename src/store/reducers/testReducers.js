import {handleActions} from 'redux-actions'
import {testState} from '../contants/models'

const testReducers = handleActions({
  TEST_MSG: (state, {payload}) => (
    state.merge({
      data: {
        msg: payload.msg
      }
    })
  )
}, testState)
export default testReducers;