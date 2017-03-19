import React, { Component, PropTypes } from 'react';
import { Alert, ScrollView } from 'react-native';
import Layout from '../../components/Layout';
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
    data: PropTypes.arrayOf(MenuItem.propTypes.category).isRequired,
    navigation: PropTypes.shape({}).isRequired,
  }

  onActionSelected = (index) => {
    const { navigation } = this.props;
    if (index === 0) {
      navigation.navigate('bookmarks');
    } else if (index === 1) {
      navigation.navigate('submit');
    } else if (index === 2) {
      navigation.navigate('about');
    } else if (index === 3) {
      // Load Changelog
      Alert.alert(
        'Changelog',
        'Changes',
        [
          {
            text: 'Dismiss',
          },
        ],
      );
    }
  }

  render() {
    const { data } = this.props;
    return (
      <Layout
        actions={actions}
        onActionSelected={this.onActionSelected}
        title="Idea Bag 2"
        navigation={this.props.navigation}
        enableBackButton={false}
      >
        <ScrollView>
          {data.map(category =>
            <MenuItem
              category={category}
              key={category.categoryLbl}
              navigation={this.props.navigation}
            />,
          )}
        </ScrollView>
      </Layout>
    );
  }
}

export default Home;
