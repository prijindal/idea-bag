import React, { Component, PropTypes } from 'react';
import { Picker } from 'react-native';

import { SORTES } from '../../store/reducer/sortby';

class ChooseSort extends Component {
  static propTypes = {
    sortby: PropTypes.string,
    setSortBy: PropTypes.func,
  }

  render() {
    return (
      <Picker
          onValueChange={this.props.setSortBy}
          selectedValue={this.props.sortby}
      >
        {SORTES.map((item, idx) =>
          <Picker.Item
              key={idx}
              label={item}
              value={item}
          />,
        )}
      </Picker>
    );
  }
}

export default ChooseSort;
