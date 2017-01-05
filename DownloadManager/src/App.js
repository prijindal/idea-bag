import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import UrlInput from './components/UrlInput';
import DownloadsInfo from './components/DownloadsInfo';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <UrlInput />
          <DownloadsInfo />
        </View>
      </Provider>
    );
  }
}

export default App;
