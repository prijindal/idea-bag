import React, { Component } from 'react';
import { View } from 'react-native';
import ChooseSort from '../../components/ChooseSort';
import FilesInfo from '../../components/FilesInfo';
import Controls from '../../components/Controls';


class SortFileRecords extends Component {
  render() {
    return (
      <View>
        <ChooseSort />
        <Controls />
        <FilesInfo />
      </View>
    );
  }
}

export default SortFileRecords;
