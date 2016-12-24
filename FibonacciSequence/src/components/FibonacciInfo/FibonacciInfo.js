import React, { Component, PropTypes } from 'react';
import { ScrollView, Text } from 'react-native';
import bigInt from 'big-integer';

async function findSequence(number) {
  let indexValue = bigInt(number);
  let first = bigInt(0);
  let second = bigInt(1);
  let result = [first];
  while (indexValue.value !== 0) {
    let third = first.add(second);
    first = second;
    second = third;
    result.push(first);
    indexValue = indexValue.minus(1);
  }
  return result;
}

class FibonacciInfo extends Component {
  static propTypes = {
    number: PropTypes.string,
  }

  state = {
    result: [],
  }

  componentWillReceiveProps = (nextProps) => {
    const { number } = nextProps;
    findSequence(number)
    .then((result) => {
      this.setState({
        result,
      });
    });
  }

  render() {
    const { number } = this.props;
    return (
      <ScrollView>
        <Text>{number}</Text>
        {this.state.result.map((item, idx) =>
          <Text key={idx}>{item.toString()}</Text>,
        )}
      </ScrollView>
    );
  }
}

export default FibonacciInfo;
