import React, { Component, PropTypes } from 'react';
import { ScrollView, Text } from 'react-native';
import bigInt from 'big-integer';

class FactorialInfo extends Component {
  static propTypes = {
    number: PropTypes.string,
  }

  findFactorial = () => {
    const { number } = this.props;
    let indexValue = bigInt(number);
    let factorial = bigInt(1);
    while (indexValue.value !== 0) {
      factorial = factorial.multiply(indexValue);
      indexValue = indexValue.minus(1);
    }
    return factorial.toString();
  }

  render() {
    const { number } = this.props;
    return (
      <ScrollView>
        <Text>{number}</Text>
        <Text>{this.findFactorial()}</Text>
      </ScrollView>
    );
  }
}

export default FactorialInfo;
