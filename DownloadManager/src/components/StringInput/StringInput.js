import React, { Component, PropTypes } from 'react';
import { TextInput } from 'react-native';

class StringInput extends Component {
  static propTypes = {
    setText: PropTypes.func,
  }

  render() {
    return (
        <TextInput
            onChangeText={this.props.setText}
        />
    );
  }
}

export default StringInput;
