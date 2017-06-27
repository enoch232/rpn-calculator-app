import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native'
import Picker from 'react-native-picker'

export default class Calculator extends Component {
  constructor(props){
    super(props)
    this.scrollView = null
    this.state = {
      expression: ""
    }
  }

  showExpressionTypePicker(){
		Picker.init({
			pickerData: ["RPN"],
			selectedValue: ["RPN"],
      pickerTitleText: "Select Expression Type",
			onPickerConfirm: data => {
        this.props.changeExpressionType(data[0])
			},
			onPickerCancel: data => {
			},
			onPickerSelect: data => {
        this.props.changeExpressionType(data[0])
			}
    })
	}

  componentsDidMount(){
    this.scrollView.scrollToEnd({animated: true})
  }

  _evaluateExpression(){
    this.props.evaluateExpression(this.state.expression, this.props.calculator.expressionType)
    this.setState({expression: ""})
  }

  render(){
    return (
      <View style = {styles.calculatorContainer}>
        <View style = {styles.calculatorHeader}>
          <Text style = {styles.calculatorTitle}>Calculator</Text>
          <TouchableOpacity onPress = {() => this.showExpressionTypePicker()} style = {styles.expressionTypePickerButton}>
            <Text style = {styles.expressionTypePickerButtonText}>{this.props.calculator.expressionType} Mode</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
           ref={(scrollView) => {this.scrollView = scrollView}} onContentSizeChange={(contentWidth, contentHeight) => {this.scrollView.scrollToEnd({animated: true})}}
           style = {styles.consoleView}>
          {this.props.calculator.history.map((result, index)=>{
            if (index == this.props.calculator.history.length - 1){
              return (<Text key = {index} style = {styles.lastResult}>
                {result}
              </Text>)
            } else {
              return (<Text key = {index} style = {styles.result}>
                {result}
              </Text>)
            }
          })}
          <View style = {styles.inputContainer}>
            <Text style = {styles.inputCarrot}>
              >
            </Text>
            <TextInput editable = {true} style = {styles.input} value = {this.state.expression} onChangeText = {(expression) => this.setState({expression})}>
            </TextInput>
          </View>
        </ScrollView>
        <TouchableOpacity onPress = {()=>this._evaluateExpression.call(this)} style = {styles.evaluateButton}>
          <Text style = {styles.evaluateButtonText}>Evaluate</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  calculatorContainer: {
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  calculatorHeader: {
    height: '10%',
    width: '100%',
    backgroundColor: '#EFEFEF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  calculatorTitle: {
    fontSize: 30
  },
  expressionTypePickerButton: {
    backgroundColor: '#FFC742',
    paddingHorizontal: 10,
    marginHorizontal: 30,
    borderRadius: 4
  },
  expressionTypePickerButtonText: {
    fontSize: 30
  },
  consoleView: {
    backgroundColor: '#2B3D50',
    height: '80%',
    width: '100%'
  },
  lastResult: {
    fontSize: 25,
    color: '#E94B35',
    marginHorizontal: 5,
    marginVertical:3
  },
  result: {
    fontSize: 25,
    color: 'white',
    marginHorizontal: 5,
    marginVertical:3
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%'
  },
  inputCarrot: {
    height: 40,
    fontSize: 30,
    width: '5%'
  },
  input: {
    width: '95%',
    marginLeft: 10,
    height: 40,
    fontSize: 30,
    color: 'white'
  },
  evaluateButton: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC742'
  },
  evaluateButtonText: {
    fontSize: 30
  }
})
