import React, { Component, PropTypes } from 'react';
import { NavigationStyles } from '@exponent/ex-navigation';
import MenuItem from '../../components/MenuItem';
import CategoryItem from './CategoryItem';

import Layout from '../Layout';

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
      <Layout
          navIconName="arrow-back"
          title={category.categoryLbl}
      >
        {category.items.map(item =>
          <CategoryItem
              item={item}
              key={item.id}
          />,
        )}
      </Layout>
    );
  }
}

export default Home;