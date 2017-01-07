import React, { Component, PropTypes } from 'react';
import { NavigationStyles } from '@exponent/ex-navigation';
import MenuItem from '../../components/MenuItem';
import CategoryItem from '../../components/CategoryItem';

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
    let { category, navigator } = this.props;
    return (
      <Layout
          navIconName="arrow-back"
          navigator={navigator}
          title={category.categoryLbl}
      >
        {category.items.map(item =>
          <CategoryItem
              category={category}
              item={item}
              key={item.id}
              navigator={navigator}
          />,
        )}
      </Layout>
    );
  }
}

export default Home;
