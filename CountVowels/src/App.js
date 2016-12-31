import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import NumberInput from './components/NumberInput';
import CountInfo from './components/CountInfo';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <NumberInput />
          <CountInfo />
        </View>
      </Provider>
    );
  }
}

export default App;
