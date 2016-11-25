import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Home from './routes/Home';
import Camera from './routes/Camera';
import History from './routes/History';
import Share from './routes/Share';

export default class MakeYourFaceCuteAgain extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial={true} />
          <Scene key="camera" component={Camera} title="Camera" />
          <Scene key="history" component={History} title="History" />
          <Scene key="share" component={Share} title="Share" />
        </Scene>
      </Router>
    )
  }
}