/* @flow */
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import AppShell from './components/AppShell';
import configureStore from './configureStore';
import AppNavigator from './containers/AppNavigator';

function setup() {
  class Root extends PureComponent {
    state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    };

    render() {
      if (this.state.isLoading) {
        return <AppShell />;
      }
      return (
        <Provider store={this.state.store}>
          <AppNavigator />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
