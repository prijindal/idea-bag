import React, { Component, PropTypes } from 'react';
import { ScrollView, Text } from 'react-native';
import Big from 'big.js';

async function PiCalculator(number) {
  if (!number) return 3;
  let indexValue = new Big(number);
  let result = new Big(3);
  try {
    while (indexValue.toString !== '0') {
      let start = new Big(2);
      start = start.mul(indexValue);
      let denominator = start;
      start = start.add(1);
      denominator = denominator.mul(start);
      start = start.add(1);
      denominator = denominator.mul(start);
      let sign = new Big(-1);
      sign = sign.pow(parseInt(indexValue.add(1).toFixed(), 0));
      let element = new Big(sign);
      element = element.mul(4);
      if (denominator.toString() === '0') {
        break;
      }
      element = element.div(denominator);
      // console.log(element.toString());
      // result += element;
      result = result.add(element);
      indexValue = indexValue.minus(1);
    }
    return result.toString();
  } catch (e) {
    console.error(e);
  }
}

function findFactorial(number) {
  if (!number) return 1;
  let num = new Big(number);
  let factorial = new Big(1);
  while (num.toString() !== '0') {
    factorial = factorial.mul(num);
    num = num.minus(1);
  }
  return factorial;
}

async function findExponent(number) {
  if (!number) return 1;
  let indexValue = new Big(number);
  let result = new Big(1);
  try {
    while (indexValue.toString() !== '0') {
      const factorial = findFactorial(indexValue);
      let inverseFac = new Big(1);
      inverseFac = inverseFac.div(factorial);
      console.log(factorial.toString());
      console.log(inverseFac.toString());
      result = result.add(inverseFac);
      indexValue = indexValue.minus(1);
    }
    return result.toString();
  } catch (e) {
    console.error(e);
  }
}

class PiInfo extends Component {
  static propTypes = {
    number: PropTypes.string,
  }

  state = {
    result: 0,
    expResult: 0,
  }

  componentWillReceiveProps = (nextProps) => {
    const { number } = nextProps;
    PiCalculator(number)
    .then((result) => {
      this.setState({
        result,
      });
    });
    findExponent(number)
    .then((expResult) => {
      this.setState({
        expResult,
      });
    });
  }

  render() {
    const { number } = this.props;
    return (
      <ScrollView>
        <Text>{number}</Text>
        <Text>Pi: {this.state.result}</Text>
        <Text>e: {this.state.expResult}</Text>
      </ScrollView>
    );
  }
}

export default PiInfo;
