/* @flow */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Dimensions, BackAndroid } from 'react-native';

import Router from '../Router';

@connect(
  ({ nav }) => ({ nav }),
  dispatch => ({
    goBack: () => dispatch(NavigationActions.back()),
  }),
)
class AppNavigator extends Component {
  static propTypes = {
    nav: PropTypes.shape({
      index: PropTypes.number,
    }).isRequired,
    goBack: PropTypes.func.isRequired,
  }


  componentDidMount() {
    this.registerBackButton();
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress');
  }

  _drawer: any;

  registerBackButton() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.props.nav.index > 0) {
        this.props.goBack();
        return true;
      }
      return false;
    });
  }

  openDrawer() {
    this._drawer.openDrawer();
  }

  drawerWidth = () => {
    const { width } = Dimensions.get('window');
    if (width - 56 > 320) {
      return 320;
    }
    return width - 56;
  }

  render() {
    return (
      <Router />
    );
  }
}

export default AppNavigator;
