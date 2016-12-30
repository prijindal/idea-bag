import React, { Component, PropTypes } from 'react';
import { ScrollView, Text } from 'react-native';

async function reverseString(string) {
  console.log(string);
  let result = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    result = result.concat(string[i]);
  }
  return result;
}

class ReverseInfo extends Component {
  static propTypes = {
    string: PropTypes.string,
  }

  state = {
    result: '',
  }

  componentWillReceiveProps = (nextProps) => {
    const { string } = nextProps;
    reverseString(string)
    .then((result) => {
      this.setState({
        result,
      });
    });
  }

  render() {
    const { string } = this.props;
    return (
      <ScrollView>
        <Text>{string}</Text>
        <Text>{this.state.result}</Text>
      </ScrollView>
    );
  }
}

export default ReverseInfo;
