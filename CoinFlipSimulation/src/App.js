import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import FlipButton from './components/FlipButton';
import Result from './components/Result';
import PreviousResults from './components/PreviousResults';
import ClearButton from './components/ClearButton';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <FlipButton />
          <Result />
          <PreviousResults />
          <ClearButton />
        </View>
      </Provider>
    );
  }
}

export default App;
