/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, View, Button, Alert} from 'react-native';
import ProfileForm from './ProfileForm';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends React.Component {
  render() {
    textList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(key => (
      <Text style={{marginTop: 50}}>Line {key}</Text>
    ));
    return (
      <ScrollView style={styles.container} testID='scrollView'>
	      <ProfileForm />
        {textList}
        <Button
          onPress={() => {
            Alert.alert('overflow button');
          }}
          title="Overflow"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // alignItems: 'flex-start',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    height: 36,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  }
});
