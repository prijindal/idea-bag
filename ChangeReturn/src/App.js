import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import CostInput from './components/CostInput';
import AmountInput from './components/AmountInput';
import ChangeInfo from './components/ChangeInfo';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <CostInput/>
          <AmountInput />
          <ChangeInfo />
        </View>
      </Provider>
    );
  }
}

export default App;
