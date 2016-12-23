import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

class CheckNumber extends Component {
  static propTypes = {
    number: PropTypes.number,
  }

  state = {
    current: 0,
  }

  componentWillMount() {
    let { number } = this.props;
    // const { visited, isValid } = this.state;
    let visited = [];
    let valid = false;
    while (!valid) {
      let temp = 0;
      let tempArray = number
              .toString()
              .split('')
              .map(a => parseInt(a, 0))
              .map(a => a * a)
      tempArray.forEach(item => {
        temp += item;
      })
      number = temp;
      if (number === 1 || visited.indexOf(number) > 0) {
        valid = true;
      }
      visited.push(number);
    }
    this.setState({
      visited,
      valid: number === 1,
    });
  }

  render() {
    const { valid, visited } = this.state;
    const { number } = this.props;
    if (valid) return (
      <View style={{flexDirection: 'row'}}>
        <Text>{number}</Text>
        <View style={{marginLeft: 10, flexDirection: 'row'}}>
          {visited.map((item, idx) =>
            <Text key={idx}>{item},</Text>
          )}
        </View>
      </View>
    )
    return null
  }
}

export default CheckNumber;
