import React, { Component, PropTypes } from 'react';
import { ScrollView, View, Text } from 'react-native';
import nextFrame from 'next-frame';

const CURRENCIES = [2000, 500, 100, 50, 20, 10, 5, 2, 1, 0.5];

async function calculateChange(difference) {
  let diff = difference;
  let change = {};
  while (diff > 0.5) {
    await nextFrame();
    for (let i = 0; i < CURRENCIES.length; i += 1) {
      if (diff - CURRENCIES[i] >= 0) {
        change[CURRENCIES[i]] = change[CURRENCIES[i]] ? change[CURRENCIES[i]] + 1 : 1;
        diff -= CURRENCIES[i];
        break;
      }
    }
  }
  return change;
}

class ChangeInfo extends Component {
  static propTypes = {
    cost: PropTypes.string,
    amount: PropTypes.string,
  }

  state = {
    error: null,
    change: {},
  }

  componentWillReceiveProps = (nextProps) => {
    const { cost, amount } = nextProps;
    let diff = amount - cost;
    if (diff < 0) {
      this.setState({
        error: `Amount should be more than ${cost}`,
        loading: false,
      });
    } else {
      this.setState({
        error: null,
        loading: true,
      });
      calculateChange(diff)
      .then(change =>
        this.setState({
          change,
          loading: false,
        }),
      );
    }
  }

  render() {
    const { cost, amount } = this.props;
    const { change, error, loading } = this.state;
    if (error) return <Text>{error}</Text>;
    return (
      <ScrollView>
        <Text>Cost: {cost}</Text>
        <Text>Amount: {amount}</Text>
        <Text>Return: {amount - cost}</Text>
        <View>
          {loading ?
            <Text>Loading...</Text> :
            <View>
              {CURRENCIES.map(currency =>
                <View key={currency}>
                  {change[currency] &&
                    <Text>{currency}: {change[currency]}</Text>
                  }
                </View>,
              )}
            </View>
          }
        </View>
      </ScrollView>
    );
  }
}

export default ChangeInfo;
