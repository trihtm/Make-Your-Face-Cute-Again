import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Frame from './Frame';

export default class History extends Component {
  render() {
    return (
      <View style={{flex: 1, top: 50}}>
        <Frame />
        <Frame /> 
        <Frame />
        <Frame />
        <Frame />
      </View>
      );
  }
}