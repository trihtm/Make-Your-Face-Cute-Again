import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Image, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  render() {
    const goToCamera = () => Actions.camera({text: 'Hello World!'}); 
  
    return (
      <Image style={styles.container} source={require('../../images/background.jpg')} >
        <TouchableOpacity style={styles.btnCamera} onPress={() => goToCamera()}>
            <Image  style={styles.icoCamera} source={require('../../images/icoCamera.png')} />
        </TouchableOpacity>
      </Image>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 0,
    width: null,
    height: null,
  },

  title:{
    justifyContent: 'flex-start',
    top: -30,
  },

  lineTwo: {
    justifyContent:'flex-end',
    flexDirection: 'row',
  },

  normalText: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'Arial',
    top: 20,
  },

  strongText: {
    color: '#fff',
    fontSize: 60,
    fontFamily: 'Arial',
  },

  btnCamera: {
    top: 150,
    width: 100,
    height: 100,
    backgroundColor: '#eff0f2',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icoCamera: {
    width:70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
