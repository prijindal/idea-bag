import React, { Component, PropTypes } from 'react';
import { ScrollView, Text } from 'react-native';
import findNextPrime from '../../findNextPrime';

class PrimeInfo extends Component {
  static propTypes = {
    number: PropTypes.string,
  }

  state = {
    result: [],
    loading: true,
  }

  componentWillReceiveProps = (nextProps) => {
    const { number } = nextProps;
    this.setState({
      loading: true,
    });
    findNextPrime(number)
    .then((result) => {
      this.setState({
        result,
        loading: false,
      });
    });
  }

  render() {
    const { number } = this.props;
    const { loading, result } = this.state;
    if (loading) return <Text>Loading...</Text>;
    return (
      <ScrollView>
        <Text>{number}</Text>
        <Text>{result}</Text>
      </ScrollView>
    );
  }
}

export default PrimeInfo;
