import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  render() {
    const goToHistory = () => Actions.history(); 
    const goToCamera = () => Actions.camera({text: 'Hello World!'}); 
  
    return (
      <View style={styles.container}>

        <Text style={styles.appName}> Make your face cute again </Text>

        <TouchableOpacity style={styles.btnCamera} onPress={goToCamera}>
            <Image  style={styles.icoCamera} source={require('../../images/icoCamera.png')} />
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ac84e8',
    top: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  appName: {
    color: '#fff',
    justifyContent: 'center',
    fontFamily: 'Arial',
    fontSize: 25,
  },

  btnCamera: {
    width: 100,
    height: 100,
    backgroundColor: '#eff0f2',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icoCamera: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
