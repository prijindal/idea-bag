import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import Input1 from './components/Input1';
import Input2 from './components/Input2';
import DenominatorInfo from './components/DenominatorInfo';
import store from './store';

// UnitGroupInput
// FromInput
// ToInput
// ValueInput
// ConvertedInfo

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Input1/>
          <Input2 />
          <DenominatorInfo />
        </View>
      </Provider>
    );
  }
}

export default App;
