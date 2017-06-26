import {
  EVALUATE_EXPRESSION,
  UPDATE_HISTORY,
  RECEIVE_RESULT
} from '../actionTypes'

export const evaluateExpression = (expression, expressionType) => ({
  type: EVALUATE_EXPRESSION,
  payload: {
    expression,
    expressionType
  }
})

export const updateHistory = (expression) => ({
  type: UPDATE_HISTORY,
  payload: {
    expression
  }
})

export const receiveResult = (result) => ({
  type: RECEIVE_RESULT,
  payload: {
    result
  }
})
