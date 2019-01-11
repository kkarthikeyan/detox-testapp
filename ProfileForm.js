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
      <Text style={{fontWeight: 'bold'}}>First name</Text>
      <TextInput
        style={{height: 40}}
        placeholder="First Name"
        onChangeText={(text) => this.setState({'firstName' : text})}>
        {this.state.firstName}
      </TextInput>

      <Text style={{fontWeight: 'bold', marginTop: 20}}>Last name</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Last Name"
        onChangeText={(text) => this.setState({'lastName' : text})}
      />
      
      <Button
        onPress={() => {
          Alert.alert(`Hello ${this.state.firstName} ${this.state.lastName}!`);
        }}
        title="Submit"
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