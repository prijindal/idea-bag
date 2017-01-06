import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

const styles = {
  item: {
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  itemTitle: {
    color: '#ffffff',
    fontSize: 18,
  },
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

  render() {
    let { category } = this.props;
    return (
      <ListItem
          containerStyle={styles.item}
          hideChevron
          subtitle={
            <View>
              <Text>Ideas: {category.categoryCount}</Text>
              <Text>{category.description}</Text>
            </View>
          }
          title={category.categoryLbl}
          titleStyle={styles.itemTitle}
      />
    );
  }
}

export default MenuItem;
