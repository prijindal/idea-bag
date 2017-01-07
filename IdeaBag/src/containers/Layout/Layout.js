import React, { Component, PropTypes } from 'react';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

class Home extends Component {
  static propTypes = {
    children: PropTypes.any,
    actions: PropTypes.array,
    onActionSelected: PropTypes.func,
    title: PropTypes.string,
    navIconName: PropTypes.any,
  }

  render() {
    let { children, actions, title, onActionSelected, navIconName } = this.props;
    return (
      <View style={styles.view}>
        <Icon.ToolbarAndroid
            actions={actions}
            iconColor="#ffffff"
            navIconName={navIconName}
            onActionSelected={onActionSelected}
            style={styles.toolbar}
            title={title}
            titleColor="#ffffff"
        />
        <ScrollView style={styles.view}>
          {children}
        </ScrollView>
      </View>
    );
  }
}

export default Home;
