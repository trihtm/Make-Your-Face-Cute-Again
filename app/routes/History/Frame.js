import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Frame extends Component {

  render() {
    const gotoShare = () => Actions.share();

    return (
        <View style={styles.wraper}>

          <View style={styles.thumbnail}>
            <Image style={styles.imgThumbnail} source={this.props.link} />
          </View>

          <View style={styles.detail}>
            <View style={styles.datetimeWrapper}>
              <Text style={styles.datetimeText} > Timeless </Text>
            </View>

            <View style={styles.tools}>
              <TouchableOpacity style={[styles.button, styles.share]} onPress={gotoShare}>
                <Text style={styles.text}> Share </Text>
              </TouchableOpacity>
               <TouchableOpacity style={[styles.button, styles.del]} onPress={() => Alert.alert('Deleted')}>
                <Text style={styles.text}> Delete </Text>
              </TouchableOpacity>
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
    backgroundColor: '#d7dae0',
  },

  thumbnail: {
    flex: 1/3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgThumbnail: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },

  detail: {
    flex: 2/3,
    backgroundColor: '#fff',
  },

  datetimeWrapper: {
    flex: 1/2,
    justifyContent: 'center',
  },

  datetimeText: {
    color: '#5c57c1',
  }, 

  tools: {
    flex: 1/2,
    flexDirection: 'row',
  },

  button: {
    flex: 1/2,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ede1e1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 20,
  },

  share: {
    backgroundColor: '#2b72e5',
  },

  del: {
    backgroundColor: '#ef0e0e',
  }

});