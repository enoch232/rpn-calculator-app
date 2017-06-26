import {
  EVALUATE_EXPRESSION,
  UPDATE_HISTORY,
  RECEIVE_RESULT
} from '../actionTypes'

export const evalulateExpression = (expression) => ({
  type: EVALUATE_EXPRESSION,
  payload: {
    expression
  }
})

export const updateHistory = () => ({
  type: UPDATE_HISTORY,
})

export const receiveResult = (result) => ({
  type: RECEIVE_RESULT,
  payload: {
    result
  }
})
