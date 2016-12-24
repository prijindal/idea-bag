import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

const styles = {
  button: {
    width: 100,
    margin: 10,
    alignItems: 'center',
    padding: 15,
  },
  text: {
    color: '#333',
  },
};

class Result extends Component {
  static propTypes = {
    flips: PropTypes.arrayOf(PropTypes.number),
  }

  getResult() {
    const { flips } = this.props;
    const length = flips.length;
    if (length === 0) {
      return 'None';
    }
    const latest = flips[length - 1];
    return latest ? 'Head' : 'Tails';
  }

  render() {
    return (
      <View style={styles.button}>
        <Text style={styles.text}>{this.getResult()}</Text>
      </View>
    );
  }
}

export default Result;
