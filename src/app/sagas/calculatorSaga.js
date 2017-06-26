import API from '../../config/api'
import {
  receiveResult
} from '../actions/calculatorActions'
import {
  EVALUATE_EXPRESSION
} from '../actionTypes'

export function * evaluateExpressionSaga(){
  while (true){
    const action = yield take(EVALUATE_EXPRESSION)
    const { expression, expressionType } = action.payload

    try {
      const result = yield call(API.evaluateExpression, expression, expressionType)

      if (result.result){
        yield put(receiveResult(result.result))
      } else {
        alert("Failed to evaluate that expression!")
      }
    } catch (error) {
      alert(error)
    }
  }
}
