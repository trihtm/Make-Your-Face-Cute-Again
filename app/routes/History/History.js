import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Frame from './Frame';

export default class History extends Component {
  render() {
    return (
      <View style={{flex: 1, top: 50}}>
        <ScrollView>
          <Frame link={require("../../images/1.png")}/>
          <Frame link={require("../../images/2.png")}/>
          <Frame link={require("../../images/3.png")}/>
          <Frame link={require("../../images/4.png")}/>
          <Frame link={require("../../images/5.png")}/>
          <Frame link={require("../../images/1.png")}/>
          <Frame link={require("../../images/2.png")}/>
          <Frame link={require("../../images/3.png")}/>
          <Frame link={require("../../images/4.png")}/>
          <Frame link={require("../../images/5.png")}/>
        </ScrollView>
      </View>
      );
  }
}