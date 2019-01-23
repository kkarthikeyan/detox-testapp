import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {'firstName' : 'unknown', 'lastName' : ''};
  }

  render() {
    return(
    <View style={styles.container}>
      <Text testID='welcome' style={{fontWeight: 'bold', fontSize: 18, marginBottom: 30}}>Welcome</Text>
      <Text style={{fontWeight: 'bold'}}>First name</Text>
      <TextInput
        style={{height: 40}}
        placeholder="First Name"
        testID="firstName"
        onChangeText={(text) => this.setState({'firstName' : text})}>
        {this.state.firstName}
      </TextInput>

      <Text style={{fontWeight: 'bold', marginTop: 30}}>Last name</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Last Name"
        testID="lastName"
        onChangeText={(text) => this.setState({'lastName' : text})}
      />
      
      <Button
        onPress={() => {
          Alert.alert('Welcome', `Hello ${this.state.firstName} ${this.state.lastName}!`);
        }}
        title="Submit"
        testID="submitButton"
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  }
});