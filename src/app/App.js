import React from 'react'
import { Provider } from 'react-redux'
import calculatorReducer from './reducers/calculatorReducer'
import CalculatorContainer from './containers/CalculatorContainer'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

export const store =
  createStore(
    combineReducers({
      calculator: calculatorReducer
    }),
    {},
    applyMiddleware(loggerMiddleware, sagaMiddleware)
  )

// sagaMiddleware.run(rootSaga);

export default () => (
  <Provider store={store}>
    <CalculatorContainer />
  </Provider>
)
