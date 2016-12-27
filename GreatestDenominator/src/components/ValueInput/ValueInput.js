import React, { Component, PropTypes } from 'react';
import { TextInput } from 'react-native';

class ValueInput extends Component {
  static propTypes = {
    setValue: PropTypes.func,
  }

  render() {
    return (
        <TextInput
            keyboardType="numeric"
            onChangeText={this.props.setValue}
        />
    );
  }
}

export default ValueInput;
