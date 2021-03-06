/* @flow */
import React, { PureComponent, PropTypes } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import Routes from './Routes';

@connect(({ nav }) => ({
  nav,
}))
class Router extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.shape({}).isRequired,
  }

  render() {
    return (
      <Routes
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    );
  }
}
export default Router;
