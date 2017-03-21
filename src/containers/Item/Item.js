import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Layout from '../../components/Layout';

const styles = {
  container: {
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    textAlign: 'left',
    color: '#333',
    marginBottom: 0,
    borderBottomWidth: 0,
  },
  divider: {
    height: 0,
  },
  description: {
    fontSize: 16,
    color: '#3f5e7f',
  },
};

class Item extends Component {
  static propTypes = {
    item: PropTypes.shape({}).isRequired,
    navigation: PropTypes.shape({}).isRequired,
    toggleBookmark: PropTypes.func.isRequired,
  }

  onActionSelected = (index) => {
    const { toggleBookmark } = this.props;
    if (index === 0) {
      toggleBookmark();
    } else if (index === 2) {
      // console.log('Share');
    }
  }

  openSubApp = () => {
    const { item, navigation } = this.props;
    const { category } = navigation.state.params;
    navigation.navigate('subapp', { item, category });
  }

  render() {
    const { item } = this.props;
    if (!item) return <Layout />;
    const actions = [
      {
        title: 'Bookmarks',
        iconName: item.bookmark ? 'bookmark' : 'bookmark-border',
        show: 'always',
      },
      {
        title: 'Share',
        iconName: 'share',
        show: 'always',
      },
    ];
    return (
      <Layout
        actions={actions}
        enableBackButton
        navigation={this.props.navigation}
        onActionSelected={this.onActionSelected}
        title="Idea Details"
      >
        <Card
          containerStyle={styles.container}
          dividerStyle={styles.divider}
          title={item.title}
          titleStyle={styles.title}
        >
          <Text style={styles.description}>{item.description}</Text>
        </Card>
        <Card
          containerStyle={styles.container}
          dividerStyle={styles.divider}
          title={item.title}
          titleStyle={styles.title}
        >
          <Button
            raised
            title="Open App"
            onPress={this.openSubApp}
          />
        </Card>
      </Layout>
    );
  }
}

export default Item;
