import React, { Component, PropTypes } from 'react';
import Layout from '../Layout';
import MenuItem from '../../components/MenuItem';

const actions = [
  {
    title: 'Bookmarks',
    iconName: 'bookmark-border',
    show: 'always',
  },
  {
    title: 'Submit Idea',
    iconName: 'edit',
    show: 'always',
  },
  {
    title: 'Help And About',
    iconName: 'help',
    show: 'ifRoom',
  },
  {
    title: 'Changelog',
    iconName: 'help',
    show: 'ifRoom',
  },
];

class Home extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(MenuItem.propTypes.category),
    navigator: PropTypes.shape(),
  }

  render() {
    let { data } = this.props;
    return (
      <Layout
          actions={actions}
          onActionSelected={this.onActionSelected}
          title="Idea Bag 2"
      >
        {data.map((category, idx) =>
          <MenuItem
              category={category}
              key={idx}
              navigator={this.props.navigator}
          />,
        )}
      </Layout>
    );
  }
}

export default Home;
