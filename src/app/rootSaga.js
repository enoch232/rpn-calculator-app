import { calculatorSaga } from './sagas/calculatorSaga'

export default function* rootSaga(){
  yield [
    calculatorSaga()
  ]
}
