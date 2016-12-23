import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import TaxInput from './components/TaxInput';
import TaxInfo from './components/TaxInfo';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <TaxInput />
          <TaxInfo />
        </View>
      </Provider>
    );
  }
}

export default App;
