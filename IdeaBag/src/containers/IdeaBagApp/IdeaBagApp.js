import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import Router from '../../helpers/router';

class IdeaBagApp extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StatusBar backgroundColor="#ffa000"/>
        <StackNavigation
            initialRoute={Router.getRoute('home')}
        />
      </NavigationProvider>
    );
  }
}

export default IdeaBagApp;
