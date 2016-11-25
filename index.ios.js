/**
 * OrMake Your Face Cute Again
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={Home} title="Home" />
  </Scene>
);

export default class ReactNativeHackathon extends Component {
  render() {
    return (
      <Router scenes={scense} />
    );
  }
}

AppRegistry.registerComponent('ReactNativeHackathon', () => ReactNativeHackathon);
