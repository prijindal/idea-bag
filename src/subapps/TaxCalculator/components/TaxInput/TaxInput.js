import React, { PropTypes } from 'react';
import { TextInput } from 'react-native';

import theme from '../../../../themes/base-theme';


const styles = {
  textInput: {
    color: theme.whiteText,
  },
};

const TaxInput = ({ setAmount }) => (
  <TextInput
    style={styles.textInput}
    underlineColorAndroid={theme.whiteText}
    keyboardType="numeric"
    onChangeText={setAmount}
  />
);

TaxInput.propTypes = {
  setAmount: PropTypes.func.isRequired,
};

export default TaxInput;
