import React, { Component, PropTypes } from 'react';
import { ScrollView, View, Text } from 'react-native';

async function checkPalindrome(string) {
  if (!string) return false;
  let strArray = string.split('');
  let l = strArray.length;
  for (let i = 0; i < l / 2; i += 1) {
    if (strArray[i] !== strArray[l - i - 1]) {
      return false;
    }
  }
  return true;
}

const style = {
  view: {
    margin: 10,
  },
  green: {
    color: '#00ff00',
  },
  red: {
    color: '#ff0000',
  },
};

class CheckInfo extends Component {
  static propTypes = {
    string: PropTypes.string,
  }

  state = {
    result: null,
  }

  componentWillReceiveProps = (nextProps) => {
    const { string } = nextProps;
    checkPalindrome(string)
    .then((result) => {
      this.setState({
        result,
      });
    });
  }

  render() {
    const { string } = this.props;
    const { result } = this.state;
    return (
      <ScrollView style={style.view}>
        <Text>{string}</Text>
        <View>{result ?
          <Text style={style.green}>Is Palindrome</Text> :
          <Text style={style.red}>Not a Palindrome</Text>}</View>
      </ScrollView>
    );
  }
}

export default CheckInfo;
