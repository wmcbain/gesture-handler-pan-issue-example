/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import {
  ScrollView,
  PanGestureHandler,
  TapGestureHandler,
  State as GestureState
} from 'react-native-gesture-handler'

export default class GestureHandlerIssues extends Component {

  render() {
    return (
      <ScrollView
        waitFor={['tap', 'pan']}
        style={styles.container} >

        <View
          style={styles.buffer}
        />

        <TapGestureHandler
          shouldCancelWhenOutside
          id='tap'
          waitFor='pan'>

          <PanGestureHandler
            shouldCancelWhenOutside
            id='pan'
            maxPointers={1}>

            <View
              style={styles.responder}
            />

          </PanGestureHandler>

        </TapGestureHandler>

        <View
          style={styles.buffer}
        />

      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('GestureHandlerIssues', () => GestureHandlerIssues);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  buffer: {
    backgroundColor: 'gray',
    height: 400
  },
  responder: {
    backgroundColor: 'purple',
    height: 100
  }
})
