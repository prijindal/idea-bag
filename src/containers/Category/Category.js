import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';
import MenuItem from '../../components/MenuItem';
import CategoryItem from '../../components/CategoryItem';

import Layout from '../../components/Layout';

const Category = ({ navigation, navigation: { state: { params: { category } } } }) => (
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
