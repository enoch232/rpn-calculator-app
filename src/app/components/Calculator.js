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
    this.scrollView = null
    this.state = {
      expression: ""
    }
  }

  componentsDidMount(){
    this.scrollView.scrollToEnd({animated: true})
  }

  _evaluateExpression(){
    this.props.evaluateExpression(this.state.expression, "RPN")
    this.setState({expression: ""})
  }

  render(){
    return (
      <View style = {{alignItems: 'center', height: '100%', width: '100%'}}>
        <View style = {{height: '10%', width: '100%', backgroundColor: '#EFEFEF', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{fontSize: 30}}>Calculator</Text>
          <TouchableOpacity style = {{backgroundColor: '#FFC742', paddingHorizontal: 10, marginHorizontal: 30, borderRadius: 4}}>
            <Text style = {{fontSize: 30}}>RPN</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
           ref={(scrollView) => {this.scrollView = scrollView}} onContentSizeChange={(contentWidth, contentHeight) => {this.scrollView.scrollToEnd({animated: true})}}
           style = {{backgroundColor: '#2B3D50', height: '80%', width: '100%'}}>
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
          <View style = {{flexDirection: 'row', width: '100%'}}>
            <Text style = {{height: 40, fontSize: 30, width: '5%'}}>
              >
            </Text>
            <TextInput editable = {true} style = {{width: '95%', marginLeft: 10, height: 40, fontSize: 30, color: 'white'}} value = {this.state.expression} onChangeText = {(expression) => this.setState({expression})}>
            </TextInput>
          </View>
        </ScrollView>
        <TouchableOpacity onPress = {()=>this._evaluateExpression.call(this)} style = {{height: '10%', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFC742'}}>
          <Text style = {{fontSize: 30}}>Evaluate</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
