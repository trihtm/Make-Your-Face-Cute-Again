import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  render() {
    const goToCamera = () => Actions.camera({text: 'Hello World!'}); 
  
    return (
      <View style={{margin: 128}}>
        <Text>This is Home</Text>
        <Text onPress={goToCamera}>Do you want to go to Camera? Press here. hello 12312</Text>
      </View>
    )
  }
}