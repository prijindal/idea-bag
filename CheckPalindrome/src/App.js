import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import StringInput from './components/StringInput';
import CheckInfo from './components/CheckInfo';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <StringInput />
          <CheckInfo />
        </View>
      </Provider>
    );
  }
}

export default App;
