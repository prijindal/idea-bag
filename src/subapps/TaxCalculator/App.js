import React, { Component } from 'react';
import { View } from 'react-native';
import TaxInput from './components/TaxInput';
import TaxInfo from './components/TaxInfo';

class App extends Component {
  render() {
    return (
      <View>
        <TaxInput />
        <TaxInfo />
      </View>
    );
  }
}

export default App;
