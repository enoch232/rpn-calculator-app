import API from '../../config/api'
import {
  receiveResult,
  updateHistory
} from '../actions/calculatorActions'
import {
  EVALUATE_EXPRESSION
} from '../actionTypes'
import {
  take,
  call,
  put
} from 'redux-saga/effects'

export function * evaluateExpressionSaga(){
  while (true){
    const action = yield take(EVALUATE_EXPRESSION)
    const { expression, expressionType } = action.payload

    try {
      const result = yield call(API.evaluateExpression, expression, expressionType)

      if (result.result){
        yield put(receiveResult(result.result))
        yield put(updateHistory(result.result))
      } else if (result.error){
        alert(result.message)
      } else {
        alert("Unknown Error!")
      }
    } catch (error) {
      alert(error)
    }
  }
}
