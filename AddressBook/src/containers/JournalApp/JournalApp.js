import React, { Component } from 'react';
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import Router from '../../helpers/router';

class JournalApp extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation
            initialRoute={Router.getRoute('home')}
        />
      </NavigationProvider>
    );
  }
}

export default JournalApp;
