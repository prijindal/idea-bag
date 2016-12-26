import React, { Component, PropTypes } from 'react';
import { TextInput } from 'react-native';

class AmountInput extends Component {
  static propTypes = {
    setAmount: PropTypes.func,
  }

  render() {
    return (
        <TextInput
            keyboardType="numeric"
            onChangeText={this.props.setAmount}
        />
    );
  }
}

export default AmountInput;
