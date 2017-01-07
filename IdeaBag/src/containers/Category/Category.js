import React, { Component, PropTypes } from 'react';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationStyles } from '@exponent/ex-navigation';
import MenuItem from '../../components/MenuItem';
import CategoryItem from './CategoryItem';

const styles = {
  view: {
    backgroundColor: '#1b2836',
    flex: 1,
    marginTop: 0,
    padding: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  toolbar: {
    height: 56,
    backgroundColor: '#ffb300',
  },
};

class Home extends Component {
  static propTypes = {
    category: MenuItem.propTypes.category,
    navigator: PropTypes.shape(),
  }

  static route = {
    styles: NavigationStyles.SlideHorizontal,
  }

  render() {
    let { category } = this.props;
    return (
      <View style={styles.view}>
        <Icon.ToolbarAndroid
            iconColor="#ffffff"
            navIconName="arrow-back"
            style={styles.toolbar}
            title={category.categoryLbl}
            titleColor="#ffffff"
        />
        <ScrollView containerStyle={styles.view}>
          {category.items.map(item =>
            <CategoryItem
                item={item}
                key={item.id}
            />,
          )}
        </ScrollView>
      </View>
    );
  }
}

export default Home;
