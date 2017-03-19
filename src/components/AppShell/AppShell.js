/* @flow */
import React from 'react';
import { View } from 'react-native';
import { ToolbarAndroid } from 'react-native-vector-icons/MaterialIcons';

import StatusBar from '../StatusBar';
import theme from '../../themes/base-theme';

const styles = {
  container: {
    backgroundColor: '#1b2836',
    flex: 1,
    marginTop: 0,
    padding: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  toolbar: {
    height: 56,
    backgroundColor: theme.toolbarDefaultBg,
    elevation: 4,
  },
};

const AppShell = () => (
  <View style={styles.container}>
    <StatusBar />
    <ToolbarAndroid
      title="Idea Bag 2"
      titleColor={theme.whiteText}
      style={styles.toolbar}
    />
  </View>
);

export default AppShell;
