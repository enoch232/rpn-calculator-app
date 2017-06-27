import { connect } from 'react-redux'
import Calculator from '../components/Calculator'
import {
  evaluateExpression,
  changeExpressionType
} from '../actions/calculatorActions'

const mapStateToProps = (state) => ({
  calculator: state.calculator
})
const mapDispatchToProps = (dispatch) => ({
  evaluateExpression: (expression, expressionTypes) => dispatch(evaluateExpression(expression, expressionTypes)),
  changeExpressionType: (expressionType) => dispatch(changeExpressionType(expressionType))
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
