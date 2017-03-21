import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import Layout from '../../components/Layout';
import { getSubApp } from '../../subapps';

class SubApp extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          item: PropTypes.shape({}),
          category: PropTypes.shape({}),
        }),
      }),
    }).isRequired,
  }

  getApp = () => {
    const { item, category } = this.props.navigation.state.params;
    const app = getSubApp(item, category);
    return app;
  }

  render() {
    const { navigation } = this.props;
    const { item } = navigation.state.params;
    return (
      <Layout
        enableBackButton
        navigation={navigation}
        title={item.title}
      >
        <View>
          {React.createElement(this.getApp())}
        </View>
      </Layout>
    );
  }
}

export default SubApp;
