import React, { Component, PropTypes } from 'react';
import { ScrollView, Text } from 'react-native';
// import bigInt from 'big-integer';

async function primeFactors(number) {
  if (!number) return [];
  let n = number || 1;
  let results = {};
  while (n % 2 === 0) {
    results[2] = results[2] ? results[2] + 1 : 1;
    n /= 2;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      results[i] = results[i] ? results[i] + 1 : 1;
      n /= i;
    }
  }
  if (n > 2) {
    results[n] = 1;
  }
  let arrayResults = [];
  for (let key in results) {
    if (results[key]) {
      arrayResults.push({
        key,
        value: results[key],
      });
    }
  }
  return arrayResults;
}

class PrimeInfo extends Component {
  static propTypes = {
    number: PropTypes.string,
  }

  state = {
    result: [],
  }

  componentWillReceiveProps = (nextProps) => {
    const { number } = nextProps;
    primeFactors(number)
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
        {this.state.result.map(({ key, value }, idx) =>
          <Text key={key}>{key}: {value}</Text>,
        )}
      </ScrollView>
    );
  }
}

export default PrimeInfo;
