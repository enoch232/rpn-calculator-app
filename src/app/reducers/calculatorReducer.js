import {
  UPDATE_HISTORY
} from '../actionTypes'

const initialState = {
  expression: "",
  result: "",
  history: []
}

export default (state = initialState, action ) => {
  if (action.type === UPDATE_HISTORY){
    return state
  } else {
    return state
  }
}
