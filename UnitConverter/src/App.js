import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import FromPicker from './components/FromPicker';
import ToPicker from './components/ToPicker';
import GroupPicker from './components/GroupPicker';
import ValueInput from './components/ValueInput';
import ConvertedInfo from './components/ConvertedInfo';
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
          <GroupPicker />
          <FromPicker />
          <ValueInput/>
          <ToPicker />
          <ConvertedInfo />
        </View>
      </Provider>
    );
  }
}

export default App;
