import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const styles = {
  button: {
    backgroundColor: '#00ff00',
    width: 100,
    margin: 10,
    alignItems: 'center',
    padding: 15,
  },
  text: {
    color: '#333',
  },
};

class FlipButton extends Component {
  static propTypes = {
    flipCoin: PropTypes.func,
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.flipCoin}>
        <View style={styles.button}>
          <Text style={styles.text}>Flip</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default FlipButton;
