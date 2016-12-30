import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import nextFrame from 'next-frame';

async function calculateResult(number) {
  await nextFrame();
  let isThree = number % 3 === 0;
  let isFive = number % 5 === 0;
  if (isThree && isFive) {
    return 'FizzBuzz';
  } else if (isFive) {
    return 'Buzz';
  } else if (isThree) {
    return 'Fizz';
  }
  return number;
}

class Element extends Component {
  static propTypes = {
    number: PropTypes.number,
  }

  state = {
    result: null,
  }

  componentWillMount() {
    let { number } = this.props;
    calculateResult(number)
    .then(result =>
      this.setState({
        result,
      }),
    );
  }

  render() {
    let { result } = this.state;
    return (
      <View>
        <Text>{result}</Text>
      </View>
    );
  }
}

export default Element;
