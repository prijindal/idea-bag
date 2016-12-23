import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class App extends Component {
  state = {
    amount: 0,
  }

  onChangeText = (value) => {
    this.setState({
      amount: value,
    });
  }

  render() {
    const { amount } = this.state;
    return (
      <View>
        <TextInput
            keyboardType="numeric"
            onChangeText={this.onChangeText}
        />
        <Text>{amount}</Text>
      </View>
    );
  }
}

export default App;
