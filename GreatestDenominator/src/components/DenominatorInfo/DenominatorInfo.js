import React, { Component, PropTypes } from 'react';
import { ScrollView, View, Text } from 'react-native';
import calculateHcf from '../../helpers/calculateHcf';

class DenominatorInfo extends Component {
  static propTypes = {
    input1: PropTypes.number,
    input2: PropTypes.number,
  }

  state = {
    error: null,
    change: {},
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      loading: true,
    });
    calculateHcf(nextProps)
    .then(hcf =>
      this.setState({
        hcf,
        loading: false,
      }),
    );
  }

  render() {
    const { hcf, error, loading } = this.state;
    if (error) return <Text>{error}</Text>;
    return (
      <ScrollView>
        <View>
          {loading ?
            <Text>Loading...</Text> :
            <View>
              <Text>{hcf || 0}</Text>
            </View>
          }
        </View>
      </ScrollView>
    );
  }
}

export default DenominatorInfo;
