import React, { Component, PropTypes } from 'react';
import { ScrollView, View, Text } from 'react-native';
import calculateConverted from '../../helpers/converter';

class ConvertedInfo extends Component {
  static propTypes = {
    group: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
    value: PropTypes.number,
  }

  state = {
    error: null,
    change: {},
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      loading: true,
    });
    let converted = calculateConverted(nextProps);
    // .then(converted =>
    this.setState({
      converted,
      loading: false,
    });
    // );
  }

  render() {
    const { converted, error, loading } = this.state;
    if (error) return <Text>{error}</Text>;
    return (
      <ScrollView>
        <View>
          {loading ?
            <Text>Loading...</Text> :
            <View>
              <Text>{converted || 0}</Text>
            </View>
          }
        </View>
      </ScrollView>
    );
  }
}

export default ConvertedInfo;
