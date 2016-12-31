import React, { Component, PropTypes } from 'react';
import { ScrollView, Text } from 'react-native';

async function halfLength(string) {
  if (!string) return false;
  let length = string.length;
  if (length % 2 === 0) {
    return parseInt(length / 2, 0);
  }
  return false;
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
    halfLength(string)
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
        {result === false ?
          <Text>Odd Length</Text> :
          <Text>{result}</Text>
        }
      </ScrollView>
    );
  }
}

export default CheckInfo;
