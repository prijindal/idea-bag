import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import JournalApp from '../../containers/JournalApp';

class AppContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool,
  }

  render() {
    let { loading } = this.props;
    if (loading) return <Text>Loading...</Text>;
    return <JournalApp />;
  }
}

export default AppContainer;
