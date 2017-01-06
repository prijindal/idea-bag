import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import data from '../../data/output.json';
import MenuItem from '../../components/MenuItem';

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
  render() {
    return (
      <View style={styles.view}>
        <Icon.ToolbarAndroid
            actions={actions}
            iconColor="#ffffff"
            onActionSelected={this.onActionSelected}
            style={styles.toolbar}
            title="Idea Bag 2"
            titleColor="#ffffff"
        />
        <ScrollView containerStyle={styles.view}>
          {data.map((category, idx) =>
            <MenuItem
                category={category}
                key={idx}
            />,
          )}
        </ScrollView>
      </View>
    );
  }
}

export default Home;
