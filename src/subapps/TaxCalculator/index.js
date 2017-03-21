/* @flow */
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import App from './App';

class Root extends PureComponent {
  state = {
    store: configureStore(() => {}),
  };

  render() {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
