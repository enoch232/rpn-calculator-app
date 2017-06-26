import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native'

export default class Calculator extends Component {
  constructor(props){
    super(props)
    this.state = {
      expression: ""
    }
  }

  _evaluateExpression(){
    this.props.evaluateExpression(this.state.expression, "RPN")
    this.setState({expression: ""})
  }

  render(){
    return (
      <View style = {{alignItems: 'center', height: '100%', width: '100%'}}>
        <View style = {{height: '20%', width: '100%', backgroundColor: '#EFEFEF', flexDirection: 'row', alignItems: 'center'}}>
          <Text style = {{fontSize: 30}}>Calculator</Text>
          <View style = {{backgroundColor: '#FFC742', height: '30%', marginHorizontal: 20}}>
            <Text style = {{fontSize: 30}}>RPN</Text>
          </View>
        </View>
        <ScrollView style = {{backgroundColor: '#2B3D50', height: '80%', width: '100%'}}>
          {this.props.calculator.history.map((result, index)=>{
            if (index == this.props.calculator.history.length - 1){
              return (<Text style = {{fontSize: 25, color: '#E94B35', marginHorizontal: 5, marginVertical:3}}>
                {result}
              </Text>)
            } else {
              return (<Text style = {{fontSize: 25, color: 'white', marginHorizontal: 5, marginVertical:3}}>
                {result}
              </Text>)
            }

          })}
          <TextInput editable = {true} style = {{height: 30, borderColor: "black", borderWidth: 1, color: 'black'}} value = {this.state.expression} onChangeText = {(expression) => this.setState({expression})}/>

        </ScrollView>
        <TouchableOpacity onPress = {()=>this._evaluateExpression.call(this)}>
          <Text>Evaluate</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
