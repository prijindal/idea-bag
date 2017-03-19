import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

const styles = {
  item: {
    margin: 0,
    paddingTop: 10,
    paddingBottom: 15,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  itemTitle: {
    color: '#ffffff',
    fontSize: 16,
  },
  subtitle: {
    paddingTop: 4,
    paddingLeft: 10,
  },
  subtitleText: {
    color: '#b2b2b2',
    fontSize: 12,
  },
  label: {
    borderRadius: 50,
    backgroundColor: '#ffc107',
    marginTop: 20,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    color: '#333333',
    fontSize: 12,
  },
};

class CategoryItem extends Component {
  static propTypes = {
    item: PropTypes.shape({

    }),
    navigator: PropTypes.shape({
      push: PropTypes.func,
    }),
    category: PropTypes.shape(),
  }

  openPage = () => {
    let { item, category, navigator } = this.props;
    navigator.push('item', { item, category });
  }

  render() {
    let { item } = this.props;
    return (
      <ListItem
          containerStyle={styles.item}
          hideChevron
          label={
            <View style={styles.label}>
              <Text style={styles.labelText}>{item.id}</Text>
            </View>
          }
          onLongPress={this.openPage}
          onPress={this.openPage}
          subtitle={
            <View style={styles.subtitle}>
              <Text style={styles.subtitleText}>{item.difficulty}</Text>
            </View>
          }
          title={item.title}
          titleStyle={styles.itemTitle}
          underlayColor="#1b2836"
      />
    );
  }
}

export default CategoryItem;