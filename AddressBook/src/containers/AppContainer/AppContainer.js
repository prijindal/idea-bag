import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import SignInButton from '../../components/SignInButton';
import JournalApp from '../../containers/JournalApp';

class AppContainer extends Component {
  static propTypes = {
    email: PropTypes.string,
    loading: PropTypes.bool,
  }

  render() {
    let { email, loading } = this.props;
    if (loading) return <Text>Loading...</Text>;
    if (!email) {
      return <SignInButton />;
    }
    return <JournalApp />;
  }
}

export default AppContainer;
