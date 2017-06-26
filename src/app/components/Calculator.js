import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'

export default class Calculator extends Component {
  constructor(props){
    super(props)
    this.state = {
      expression: ""
    }
  }

  render(){
    return (
      <View style = {{marginTop: 100}}>
        <Text>{this.props.calculator.result}</Text>
        <TextInput editable = {true} style = {{height: 30, borderColor: "black", borderWidth: 1, color: 'black'}} onChangeText = {(expression) => this.setState({expression})}/>
        <TouchableOpacity onPress = {()=>this.props.evaluateExpression(this.state.expression, "RPN")}>
          <Text>Evaluate</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
