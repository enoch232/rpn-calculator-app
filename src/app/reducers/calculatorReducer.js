import {
  UPDATE_HISTORY,
  RECEIVE_RESULT
} from '../actionTypes'

const initialState = {
  result: "",
  history: [],
  expressionType: ""
}

export default (state = initialState, action ) => {
  if (action.type === UPDATE_HISTORY){
    return {...state, history: state.history.concat(action.payload.expression)}
  } else if (action.type === RECEIVE_RESULT){
    return {...state, result: action.payload.result}
  } else if (action.type === CHANGE_EXPRESSION_TYPE){
    return {...state, expressionType: action.payload.expressionType}
  } else {
    return state
  }
}
