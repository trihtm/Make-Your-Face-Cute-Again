import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Share extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.des}> Choose your network: </Text> 

        <View style={styles.wrapper}>

          <TouchableOpacity style={styles.button} onPress={() => {Alert.alert('Share to Facebook')}}>
            <Image style={styles.icoSocial} source={require('../../images/fb.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {Alert.alert('Share to Instagram')}}>
            <Image style={styles.icoSocial} source={require('../../images/inst.png')} />
          </TouchableOpacity>

        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  des: {
    color: '#212e42',
    fontSize: 20,
    alignItems: 'center',
    fontFamily: 'Arial',
  },

  wrapper: {
    top: 50,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  icoSocial: {
    width: 100,
    height: 100,
  }
});