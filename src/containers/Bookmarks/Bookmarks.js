import React, { Component, PropTypes } from 'react';
import { NavigationStyles } from '@exponent/ex-navigation';
import CategoryItem from '../../components/CategoryItem';

import Layout from '../Layout';

class Home extends Component {
  static propTypes = {
    data: PropTypes.shape(),
    navigator: PropTypes.shape(),
  }

  static route = {
    styles: NavigationStyles.SlideVertical,
  }

  state = {
    bookmarks: [],
  }

  componentWillMount() {
    let { data } = this.props;
    let bookmarks = [];
    data.forEach((category) => {
      category.items.forEach((item) => {
        if (item.bookmark) {
          bookmarks.push(Object.assign({}, item, {
            category,
          }));
        }
      });
    });
    this.setState({
      bookmarks,
    });
  }

  render() {
    let { navigator } = this.props;
    let { bookmarks } = this.state;
    return (
      <Layout
          navIconName="arrow-back"
          navigator={navigator}
          title="Bookmarks"
      >
        {bookmarks && bookmarks.map(item =>
          <CategoryItem
              category={item.category}
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
