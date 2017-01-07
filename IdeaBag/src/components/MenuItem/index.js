import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

const styles = {
  item: {
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  itemTitle: {
    color: '#ffffff',
    fontSize: 16,
  },
  subtitle: {
    paddingTop: 5,
    paddingLeft: 10,
  },
  subtitleText: {
    color: '#b2b2b2',
    fontSize: 12,
  },
  avatar: {
    width: 50,
    height: 50,
  },
};

const mapCategoryToImage = {
  Numbers: 'numbers',
  Text: 'text',
  Networking: 'network',
  'Enterprise Applications': 'enterprise',
  Threading: 'cpu',
  Web: 'web',
  Files: 'file',
  Databases: 'database',
  'Graphics and Multimedia': 'multimedia',
  Games: 'games',
};

class MenuItem extends Component {
  static propTypes = {
    category: PropTypes.shape({
      categoryLbl: PropTypes.string,
      completedCount: PropTypes.number,
      categoryCount: PropTypes.number,
      description: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.object),
    }),
  }

  imageSource() {
    return {
      uri: mapCategoryToImage[this.props.category.categoryLbl],
    };
  }

  render() {
    let { category } = this.props;
    return (
      <ListItem
          avatar={this.imageSource()}
          avatarStyle={styles.avatar}
          containerStyle={styles.item}
          hideChevron
          subtitle={
            <View style={styles.subtitle}>
              <Text style={styles.subtitleText}>Ideas: {category.categoryCount}</Text>
              <Text style={styles.subtitleText}>{category.description}</Text>
            </View>
          }
          title={category.categoryLbl}
          titleStyle={styles.itemTitle}
      />
    );
  }
}

export default MenuItem;
