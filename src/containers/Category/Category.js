import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import MenuItem from '../../components/MenuItem';
import CategoryItem from '../../components/CategoryItem';

import Layout from '../../components/Layout';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          category: MenuItem.propTypes.category,
        }),
      }),
    }).isRequired,
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
      </Layout>
    );
  }
}

export default Home;
