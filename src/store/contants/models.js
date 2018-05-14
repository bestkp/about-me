import Immutable from 'immutable'

const {fromJS} = Immutable;

export const uiState = fromJS({
  spinner: false,
})

export const gitState = fromJS({
  userId: '',
  data: {}
})

export const testState = fromJS({
  data: {
    msg: ''
  }
})