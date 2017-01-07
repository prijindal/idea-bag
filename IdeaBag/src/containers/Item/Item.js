import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import { NavigationStyles } from '@exponent/ex-navigation';
import Layout from '../Layout';

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

const actions = [
  {
    title: 'Bookmarks',
    iconName: 'bookmark-border',
    show: 'always',
  },
  {
    title: 'Share',
    iconName: 'share',
    show: 'always',
  },
];

class Item extends Component {
  static propTypes = {
    item: PropTypes.shape(),
    navigator: PropTypes.shape(),
  }

  static route = {
    styles: NavigationStyles.SlideHorizontal,
  }

  render() {
    let { item } = this.props;
    return (
      <Layout
          actions={actions}
          navIconName="arrow-back"
          navigator={this.props.navigator}
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
      </Layout>
    );
  }
}

export default Item;
