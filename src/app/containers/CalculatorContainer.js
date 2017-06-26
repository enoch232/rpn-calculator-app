import { connect } from 'react-redux'
import Calculator from '../components/Calculator'
import {
  evalulateExpression
} from '../actions/calculatorActions'

const mapStateToProps = (state) => ({
  calculator: state.calculator
})
const mapDispatchToProps = (dispatch) => ({
  evalulateExpression: (expression) => dispatch(evalulateExpression(expression))
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
