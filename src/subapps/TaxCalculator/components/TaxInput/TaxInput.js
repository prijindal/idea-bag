import React, { Component, PropTypes } from 'react';
import { TextInput } from 'react-native';

import theme from '../../../../themes/base-theme';


const styles = {
  textInput: {
    color: theme.whiteText,
  },
};

class TaxInput extends Component {
  static propTypes = {
    setAmount: PropTypes.func.isRequired,
  }

  render() {
    return (
      <TextInput
        style={styles.textInput}
        underlineColorAndroid={theme.whiteText}
        keyboardType="numeric"
        onChangeText={this.props.setAmount}
      />
    );
  }
}

export default TaxInput;
