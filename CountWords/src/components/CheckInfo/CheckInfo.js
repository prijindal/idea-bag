import React, { Component, PropTypes } from 'react';
import { ScrollView, Text } from 'react-native';

async function countWords(string) {
  if (!string) return 0;
  return string.trim().split(' ').length;
}

const style = {
  view: {
    margin: 10,
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
    countWords(string)
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
        <Text>{result}</Text>
      </ScrollView>
    );
  }
}

export default CheckInfo;
