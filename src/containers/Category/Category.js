import React, { PureComponent, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import MenuItem from '../../components/MenuItem';
import CategoryItem from '../../components/CategoryItem';

import Layout from '../../components/Layout';

class Category extends PureComponent {
  state = {
    opened: false,
  }
  componentDidMount() {
    setTimeout(() =>
      this.setState(() => ({
        opened: true,
      })),
      0,
    );
  }
  render() {
    const { navigation } = this.props;
    const { category } = navigation.state.params;
    return (
      <Layout
        enableBackButton
        navigation={navigation}
        title={category.categoryLbl}
      >
        {this.state.opened &&
          <ScrollView>
            {category.items.map(item =>
              <CategoryItem
                category={category}
                item={item}
                key={item.id}
                navigation={navigation}
              />,
            )}
          </ScrollView>
        }
      </Layout>
    );
  }
}

Category.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        category: MenuItem.propTypes.category,
      }),
    }),
  }).isRequired,
};

export default Category;
