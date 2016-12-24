import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const styles = {
  button: {
    backgroundColor: '#ff0000',
    width: 100,
    margin: 10,
    alignItems: 'center',
    padding: 15,
  },
  text: {
    color: '#333',
  },
};

class ClearButton extends Component {
  static propTypes = {
    clear: PropTypes.func,
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.clear}>
        <View style={styles.button}>
          <Text style={styles.text}>Clear</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ClearButton;
