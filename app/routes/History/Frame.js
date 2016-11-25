import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Frame extends Component {
  render() {
    const gotoShare = () => Actions.share();

    return (

      <View style={styles.wraper}>

        <View style={styles.thumbnail}>
        </View>

        <View style={styles.detail}>
          <View style={styles.datetimeWrapper}>
            <Text style={styles.datetimeText} > Timeless </Text>
          </View>

          <View style={styles.tools}>
            <Button style={styles.button} title='Share' onPress={gotoShare} />
            <Button style={styles.button} title='Delete' onPress={() => {Alert.alert('Deleted!')}} />
          </View>
        </View>

      </View>

      );
  }
}

const styles = StyleSheet.create({

  wraper: {
    flex: 1/5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  thumbnail: {
    flex: 1/3,
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#000',
  },

  detail: {
    flex: 2/3,
    backgroundColor: '#d7dae0',
    borderWidth: 1,
    borderColor: '#8b9dba',
  },

  datetimeWrapper: {
    flex: 1/2,
    borderWidth: 1,
    borderBottomColor: '#83878c',
  },

  datetimeText: {
    color: '#5c57c1',
  }, 

  tools: {
    flex: 1/2,
    flexDirection: 'row',
  },

  button: {
    paddingRight: 5,
    width: 30,
    height: 30,
  }

});