import React, { Component, PropTypes } from 'react';
import { View, Text, BackAndroid } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = {
  view: {
    flexDirection: 'row',
  },
};

class Controls extends Component {
  static propTypes = {
    goBack: PropTypes.func,
    directory: PropTypes.string,
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      this.props.goBack();
      return true;
    });
  }

  render() {
    let { directory, goBack } = this.props;
    return (
      <View style={styles.view}>
        <Icon
            name="arrow-up"
            onPress={goBack}
            type="material-community"
        />
        <Text>{directory}</Text>
      </View>
    );
  }
}

export default Controls;
