import React, { Component, PropTypes } from 'react';
import { TextInput } from 'react-native';

class NumberInput extends Component {
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

export default NumberInput;
