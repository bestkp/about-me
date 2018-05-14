import {TEST_MSG} from '../contants/actionTypes'

export const setTestMsg = (msg = 'default') => ({
  type: TEST_MSG,
  payload: {msg}
})