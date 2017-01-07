import React, { Component } from 'react';
import { Provider } from 'react-redux';
import IdeaBagApp from './containers/IdeaBagApp';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IdeaBagApp />
      </Provider>
    );
  }
}

export default App;
