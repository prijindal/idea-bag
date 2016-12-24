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

class PreviousResults extends Component {
  static propTypes = {
    flips: PropTypes.arrayOf(PropTypes.number),
  }

  getFlipMap() {
    const { flips } = this.props;
    let result = { 0: 0, 1: 0 };
    for (let i = 0; i < flips.length; i += 1) {
      if (!result[flips[i]]) {
        result[flips[i]] = 0;
      }
      result[flips[i]] += 1;
    }
    return result;
  }

  render() {
    const flipMaps = this.getFlipMap();
    return (
      <View style={styles.button}>
        <Text style={styles.text}>Heads: {flipMaps[1]}</Text>
        <Text style={styles.text}>Tails: {flipMaps[0]}</Text>
      </View>
    );
  }
}

export default PreviousResults;
