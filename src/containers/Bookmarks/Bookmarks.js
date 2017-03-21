import React, { PureComponent, PropTypes } from 'react';
import CategoryItem from '../../components/CategoryItem';

import Layout from '../../components/Layout';

class Home extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf().isRequired,
    navigation: PropTypes.shape().isRequired,
  }

  state = {
    bookmarks: [],
  }

  componentWillMount() {
    const { data } = this.props;
    const bookmarks = [];
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
    const { navigation } = this.props;
    const { bookmarks } = this.state;
    return (
      <Layout
        navigation={this.props.navigation}
        enableBackButton
        navigator={navigation}
        title="Bookmarks"
      >
        {bookmarks && bookmarks.map(item =>
          <CategoryItem
            category={item.category}
            item={item}
            key={item.id}
            navigation={navigation}
          />,
        )}
      </Layout>
    );
  }
}

export default Home;
