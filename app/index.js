import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Home from './routes/Home';

export default class MakeYourFaceCuteAgain extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial={true} />
        </Scene>
      </Router>
    )
  }
}