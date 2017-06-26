import { evaluateExpressionSaga } from './sagas/calculatorSaga'

export default function* rootSaga(){
  yield* evaluateExpressionSaga()
}
